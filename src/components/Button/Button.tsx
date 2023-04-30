import React from 'react';
import {AppText} from '../AppText';
import {AppColors} from '../../utils';
import {ButtonStyled} from './Button.styles';
import {buttonSizeType} from './models';
import {sizeOptions} from './constants';

interface IButton {
  label: string;
  onPress?: () => void;
  size?: buttonSizeType;
}

export const Button = ({
  label,
  size = sizeOptions.NORMAL,
  onPress = () => {},
}: IButton) => {
  return (
    <ButtonStyled onPress={onPress} size={size}>
      <AppText type="h4" color={AppColors.white} bold>
        {label}
      </AppText>
    </ButtonStyled>
  );
};
