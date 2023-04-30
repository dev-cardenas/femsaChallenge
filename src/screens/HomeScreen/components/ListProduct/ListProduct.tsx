import React from 'react';
import {ListRenderItem} from 'react-native';
import {ProductType} from '../../../../models';
import {StyledFlatList, ContentList, Box} from './ListProduct.styles';
import {ItemProduct} from './ItemProduct';

interface IListProduct {
  products: ProductType[];
}

export const ListProduct = ({products}: IListProduct) => {
  const renderItem: ListRenderItem<ProductType> = ({item}) => {
    return <ItemProduct product={item} />;
  };

  const keyExtractor = (item: ProductType) => item.id.toString();

  return (
    <ContentList>
      <StyledFlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={true}
      />
      <Box />
    </ContentList>
  );
};
