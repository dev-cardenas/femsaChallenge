import React from 'react';
import {ContainerPoint, Box, ContentPoint} from './Point.styles';
import {AppText} from '../../../../components';
import {AppColors} from '../../../../utils';

export const Point = () => {
  return (
    <ContainerPoint>
      <Box>
        <AppText bold color={AppColors.white}>
          Diciembre
        </AppText>
        <ContentPoint>
          <AppText bold align="center" type="h1" color={AppColors.white}>
            10,00.00 pts
          </AppText>
        </ContentPoint>
      </Box>
    </ContainerPoint>
  );
};
