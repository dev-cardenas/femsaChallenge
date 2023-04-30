import React from 'react';
import {AppText} from '../../../../components';
import {ContainerPoint} from './Point.styles';

interface IPoint {
  points: number;
}

export const Point = ({points}: IPoint) => {
  return (
    <ContainerPoint>
      <AppText type="h3" bold>
        {points} puntos
      </AppText>
    </ContainerPoint>
  );
};
