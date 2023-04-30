import React from 'react';
import {AppText} from '../AppText';
import {AppColors} from '../../utils';
import {ButtonStyled} from './Button.styles';

interface IButton {
  label: string;
  onPress?: () => void;
}

export const Button = ({label, onPress = () => {}}: IButton) => {
  return (
    <ButtonStyled onPress={onPress}>
      <AppText type="h4" color={AppColors.white} bold>
        {label}
      </AppText>
    </ButtonStyled>
  );
};
