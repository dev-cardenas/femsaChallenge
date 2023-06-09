import {fontTypes} from '../constants/fontTypes';
import {TextStyledComponentProps, fontStyledGeneratorType} from '../models';

export const fontStyledGenerator = ({
  type,
  bold,
  color,
  align,
}: fontStyledGeneratorType): TextStyledComponentProps => {
  return {
    ...fontTypes[type],
    fontWeight: bold ? 800 : 400,
    color,
    align,
  };
};
