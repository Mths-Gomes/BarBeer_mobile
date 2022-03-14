import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoginScreen = () => (
  <View style={style.container}>
    <Text style={{color: 'white'}}>LoginScreen</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
