import styled from 'styled-components/native';
import {AppColors} from '../../utils';

interface ContainerProps {
  paddingHorizontal: boolean;
  paddingTop: boolean;
  paddingBottom: boolean;
}

export const Container = styled.View<ContainerProps>`
  position: relative;
  flex: 1;
  background-color: ${AppColors.background};
  padding-top: ${({paddingTop}) => (paddingTop ? '60px' : '0px')};
  padding-bottom: ${({paddingBottom}) => (paddingBottom ? '40px' : '0px')};
  padding-left: ${({paddingHorizontal}) =>
    paddingHorizontal ? '20px' : '0px'};
  padding-right: ${({paddingHorizontal}) =>
    paddingHorizontal ? '20px' : '0px'};
`;
