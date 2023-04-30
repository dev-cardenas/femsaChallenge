import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppSvg, AppText} from '../../../../components';
import {ProductType, RootNavigationProps} from '../../../../models';
import {formattedDate} from '../../../../utils';
import {
  ContentItem,
  ContentImage,
  ContentInfo,
  Image,
} from './ListProduct.styles';
import {Point} from './Point';

interface IItemProduct {
  product: ProductType;
}

export const ItemProduct: React.FC<IItemProduct> = ({product}) => {
  const navigation = useNavigation<RootNavigationProps>();
  const {product: name, points, createdAt, is_redemption, image} = product;
  return (
    <ContentItem onPress={() => navigation.navigate('Product', product)}>
      {image ? (
        <Image
          source={{
            uri: image,
          }}
        />
      ) : (
        <ContentImage>
          <AppSvg name={'ProductEmpty'} width={45} height={45} />
        </ContentImage>
      )}
      <ContentInfo>
        <AppText bold>
          {name.length >= 23 ? `${name.slice(0, 18)}...` : name}
        </AppText>
        <AppText type="h6">{formattedDate(createdAt)}</AppText>
      </ContentInfo>
      <Point points={points} isRedemption={is_redemption} />
    </ContentItem>
  );
};
