import React from 'react';
import {AppSvg, AppText} from '../../../../components';
import {AppColors} from '../../../../utils';
import {ContentPoint, ContentSvg, ContentPointInfo} from './ListProduct.styles';

interface IPoint {
  isRedemption: boolean;
  points: number;
}

export const Point: React.FC<IPoint> = ({isRedemption, points}) => {
  return (
    <ContentPoint>
      <ContentPointInfo>
        <AppText type="h4" bold>
          <AppText
            type="h4"
            color={isRedemption ? AppColors.success : AppColors.error}
            bold>
            {isRedemption ? '+' : '-'}
          </AppText>
          {points}
        </AppText>
      </ContentPointInfo>
      <ContentSvg>
        <AppSvg name={'Subtract'} width={10} height={10} />
      </ContentSvg>
    </ContentPoint>
  );
};
