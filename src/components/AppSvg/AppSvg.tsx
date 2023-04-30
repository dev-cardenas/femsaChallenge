import React from 'react';
import {SvgProps} from 'react-native-svg';

import ProductEmpty from '../../assets/svg/product_empty.svg';
import Subtract from '../../assets/svg/Subtract.svg';

const SVG_IMAGES = {
  ProductEmpty,
  Subtract,
};

export type SvgImageName = keyof typeof SVG_IMAGES;

export type TypeIconProps = SvgProps & {
  name: SvgImageName;
};

export const AppSvg = ({name, ...props}: TypeIconProps) => {
  const SvgImage = SVG_IMAGES[name];
  return <SvgImage {...props} />;
};
