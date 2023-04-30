import styled from 'styled-components/native';
import {AppColors} from '../../../../utils';

export const ContentHeader = styled.View`
  width: 393px;
  height: 150px;
  position: relative;
  background-color: ${AppColors.headerBackground};
`;

export const ContentName = styled.View`
  position: absolute;
  left: 20px;
  bottom: 24px;
`;
