import React, {ReactNode} from 'react';
import {Text} from './AppText.styles';
import {fontStyledGenerator} from './utils/fontStyledGenerator';
import {appTextType} from './models';
import {AppColors} from '../../utils';

type AppTextProps = appTextType & {
  children: ReactNode;
};

export const AppText = ({
  children,
  type = 'h4',
  bold = false,
  color = AppColors.black,
}: AppTextProps) => {
  const textStyles = fontStyledGenerator({
    type,
    bold,
    color,
  });
  return <Text {...textStyles}>{children}</Text>;
};
