import React from 'react';
import {useFetchTodo} from './hooks/useFetchTodo';
import {HomeProps} from './models';
import {AppText, Layout} from '../../components';
import {Point, Greeting, ListProduct} from './components';
import {AppColors} from '../../utils';

export const HomeScreen = () => {
  const {loading, products} = useFetchTodo();
  console.log(loading);
  return (
    <Layout>
      <Greeting username="Ruben Rodriguez" />

      <AppText type="h5" bold color={AppColors.gray}>
        TUS PUNTOS
      </AppText>

      <Point />

      <AppText type="h5" bold color={AppColors.gray}>
        TUS MOVIMIENTOS
      </AppText>

      <ListProduct products={products} />
    </Layout>
  );
};
