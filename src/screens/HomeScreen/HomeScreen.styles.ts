import styled from 'styled-components/native';
import {AppColors} from '../../utils';

export const ContentButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ActivityContent = styled.View`
  background-color: ${AppColors.background}90;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
`;
