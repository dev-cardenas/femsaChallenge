import styled from 'styled-components/native';
import {AppColors} from '../../../../utils';

export const ContainerPoint = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  width: 100%;
  max-width: 286px;
  height: 143px;
  padding-top: 21px;
  padding-bottom: 21px;
  padding-left: 18px;
  padding-right: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  background-color: ${AppColors.primary};
`;

export const ContentPoint = styled.View`
  margin-top: 10px;
`;
