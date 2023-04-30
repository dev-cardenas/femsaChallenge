import React from 'react';
import {AppText} from '../../../../components';
import {AppColors, PointFormat} from '../../../../utils';
import {ContainerPoint, Box, ContentPoint} from './Point.styles';

interface IPoint {
  total: number;
}

export const Point = ({total}: IPoint) => {
  const totalFormat = PointFormat.from(total, {symbol: ''});
  return (
    <ContainerPoint>
      <Box>
        <AppText bold color={AppColors.white}>
          Diciembre
        </AppText>
        <ContentPoint>
          <AppText bold align="center" type="h1" color={AppColors.white}>
            {`${totalFormat}`} pts
          </AppText>
        </ContentPoint>
      </Box>
    </ContainerPoint>
  );
};
