import styled from 'styled-components/native';
import {TextStyledComponentProps} from './models/fontModels';

export const Text = styled.Text<TextStyledComponentProps>`
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeight};
  line-height: ${({lineHeight}) => lineHeight};
  font-family: 'Avenir';
`;
