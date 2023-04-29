import {Dimensions, PixelRatio, Platform} from 'react-native';

//Figma dimensions
export const FIGMA_LOGIC_DIMENSIONS = {
  WIDTH: 393,
  HEIGHT: 852,
};

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / FIGMA_LOGIC_DIMENSIONS.WIDTH;
const hscale: number = SCREEN_HEIGHT / FIGMA_LOGIC_DIMENSIONS.HEIGHT;

export type ResponsiveBased = 'width' | 'height';

export const appResponsiveSize = (
  size: number,
  based: ResponsiveBased = 'width',
) => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const SCREENS_PADDING = {
  horizontal: appResponsiveSize(16),
  top: appResponsiveSize(24, 'height'),
};

export const SCREENS_HORIZONTAL_PADDING = appResponsiveSize(20);
