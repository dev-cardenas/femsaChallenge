import React from 'react';
import {ActivityIndicator} from 'react-native';
import {options} from './constants';
import {useFetchTodo} from './hooks/useFetchTodo';
import {AppText, Layout, Button} from '../../components';
import {Point, Greeting, ListProduct} from './components';
import {AppColors} from '../../utils';
import {ContentButtons, ActivityContent} from './HomeScreen.styles';

export const HomeScreen = () => {
  const {
    loading,
    productToShow,
    total,
    selected,
    handleSelected,
    handleEndReached,
  } = useFetchTodo();

  return (
    <Layout>
      <Greeting username="Ruben Rodriguez" />

      <AppText type="h5" bold color={AppColors.gray}>
        TUS PUNTOS
      </AppText>

      <Point total={total} />

      <AppText type="h5" bold color={AppColors.gray}>
        TUS MOVIMIENTOS
      </AppText>

      <ListProduct
        products={productToShow}
        handleEndReached={handleEndReached}
      />

      {selected === options.ALL ? (
        <ContentButtons>
          <Button
            size="small"
            label="Ganados"
            onPress={() => handleSelected(options.WON)}
          />
          <Button
            size="small"
            label="Canjeados"
            onPress={() => handleSelected(options.REDEEMED)}
          />
        </ContentButtons>
      ) : (
        <Button label="Todos" onPress={() => handleSelected(options.ALL)} />
      )}

      {loading && (
        <ActivityContent>
          <ActivityIndicator size="large" color={AppColors.primary} />
        </ActivityContent>
      )}
    </Layout>
  );
};
