export type fontSizeType = '32px' | '24px' | '20px' | '16px' | '14px' | '12px';
export type lineHeightType =
  | '44px'
  | '33px'
  | '27px'
  | '22px'
  | '19px'
  | '16px';
export type fontWeightType = 400 | 800;
export type textType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type alignType = 'left' | 'center' | 'right';

export type fontStyleType = {
  fontSize: fontSizeType;
  lineHeight: lineHeightType;
};

export type fontTypeType = {
  [key: string]: fontStyleType;
};

export type TextStyledComponentProps = {
  color: string;
  fontWeight: fontWeightType;
  fontSize: fontSizeType;
  lineHeight: lineHeightType;
  align: alignType;
};

export type appTextType = {
  type?: textType;
  bold?: boolean;
  color?: string;
  align?: alignType;
};

export type fontStyledGeneratorType = {
  type: textType;
  bold: boolean;
  color: string;
  align: alignType;
};
