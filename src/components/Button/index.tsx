import React from 'react';
import { ButtonProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProp extends ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProp> = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
