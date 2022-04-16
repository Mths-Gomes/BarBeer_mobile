import React, {
  createContext,
  useMemo,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@BarBeer:token',
        '@BarBeer:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, userForResponse } = response.data;

    await AsyncStorage.multiSet([
      ['@BarBeer:token', token],
      ['@BarBeer:user', JSON.stringify(userForResponse)],
    ]);

    setData({ token, user: userForResponse });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@BarBeer:token', '@BarBeer:user']);

    setData({} as AuthState);
  }, []);

  const userContext = useMemo(
    () => ({ user: data.user, signIn, signOut }),
    [data.user, signIn, signOut],
  );

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
