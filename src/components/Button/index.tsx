import React from 'react';
import { ButtonProps } from 'react-native';
import { Container, View } from './styles';

interface ButtonProp extends ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProp> = ({ children, onPress }) => (
  <View>
    <Container
      fullWidth={true}
      onPress={onPress}
      radius={10}
      text={children}
      type="flat"
      style={Container}
      textStyle={{
        color: '#312e38',
        fontFamily: 'RobotoSlab-Medium',
        textTransform: 'capitalize',
        fontSize: 18,
      }}
    />
  </View>
);

export default Button;

//{ color: '#213', fontFamily: 'RobotoSlab-Medium' }
