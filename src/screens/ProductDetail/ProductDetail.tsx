import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppText, Layout, Button} from '../../components';

import {AppColors} from '../../utils';
import {ProductDetailRouteProps, RootNavigationProps} from '../../models';
import {Header, ContentImage, ContentDate, Point} from './components';
import {ContentBody} from './ProductDetail.styles';

export const ProductDetail = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const {
    params: {product, createdAt, image, points},
  } = useRoute<ProductDetailRouteProps>();

  return (
    <Layout paddingHorizontal={false} paddingTop={false}>
      <Header name={product} />
      <ContentBody>
        <ContentImage image={image} />

        <AppText color={AppColors.gray} bold>
          Detalles del producto:
        </AppText>

        <ContentDate createdAt={createdAt} />

        <AppText color={AppColors.gray} bold>
          Con esta compra acumulaste:
        </AppText>

        <Point points={points} />

        <Button onPress={() => navigation.goBack()} label="Aceptar" />
      </ContentBody>
    </Layout>
  );
};
