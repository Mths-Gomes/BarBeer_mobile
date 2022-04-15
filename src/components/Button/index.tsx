import React from 'react';
import { ButtonProps } from 'react-native';
import { Container } from './styles';

interface ButtonProp extends ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProp> = ({ children, onPress }) => (
  <Container
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
);

export default Button;
