import React from 'react';
import {AppSvg, AppText} from '../../../../components';
import {ProductType} from '../../../../models';
import {ContentItem, ContentImage, ContentInfo} from './ListProduct.styles';
import {Point} from './Point';

interface IItemProduct {
  product: ProductType;
}

export const ItemProduct: React.FC<IItemProduct> = ({product}) => {
  const {product: name, points, createdAt, is_redemption} = product;
  return (
    <ContentItem onPress={() => console.log(name)}>
      <ContentImage>
        <AppSvg name={'ProductEmpty'} width={45} height={45} />
      </ContentImage>
      <ContentInfo>
        <AppText bold>
          {name.length >= 23 ? `${name.slice(0, 18)}...` : name}
        </AppText>
        <AppText type="h6">{createdAt}</AppText>
      </ContentInfo>
      <Point points={points} is_redemption={is_redemption} />
    </ContentItem>
  );
};
