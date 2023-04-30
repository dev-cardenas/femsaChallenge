import styled from 'styled-components/native';
import {AppColors} from '../../../../utils';

export const Container = styled.View`
  margin-bottom: 36px;
  height: 350px;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-color: ${AppColors.white};
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;
