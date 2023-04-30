import React from 'react';
import {AppSvg, AppText} from '../../../../components';
import {AppColors} from '../../../../utils';
import {ContentPoint, ContentSvg, ContentPointInfo} from './ListProduct.styles';

interface IPoint {
  is_redemption: boolean;
  points: number;
}

export const Point: React.FC<IPoint> = ({is_redemption, points}) => {
  return (
    <ContentPoint>
      <ContentPointInfo>
        <AppText type="h4" bold>
          <AppText
            type="h4"
            color={is_redemption ? AppColors.success : AppColors.error}
            bold>
            {is_redemption ? '+' : '-'}
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
