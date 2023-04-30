import styled from 'styled-components/native';
import {AppColors} from '../../utils';
import {sizeOptions} from './constants';
import {buttonSizeType} from './models';

interface ButtonStyledProps {
  size: buttonSizeType;
}

export const ButtonStyled = styled.TouchableOpacity<ButtonStyledProps>`
  width: ${({size}) => (size === sizeOptions.NORMAL ? '100%' : '48%')};
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${AppColors.primary};
  border-radius: 10px;
`;
