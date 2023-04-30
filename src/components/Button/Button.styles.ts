import styled from 'styled-components/native';
import {AppColors} from '../../utils';

export const ButtonStyled = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${AppColors.primary};
  border-radius: 10px;
`;
