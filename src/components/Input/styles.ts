import styled, { css } from 'styled-components/native';
import { TextInput as TxtInput } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${(propos) =>
    propos.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(propos) =>
    propos.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const TextInput = styled(TxtInput)`
  flex: 1px;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
