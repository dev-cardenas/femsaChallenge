import React from 'react';
import {ListRenderItem} from 'react-native';
import {ProductType} from '../../../../models';
import {StyledFlatList, ContentList, Box} from './ListProduct.styles';
import {ItemProduct} from './ItemProduct';

interface IListProduct {
  products: ProductType[];
  handleEndReached: () => void;
}

export const ListProduct = ({products, handleEndReached}: IListProduct) => {
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
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
      />
      <Box />
    </ContentList>
  );
};
