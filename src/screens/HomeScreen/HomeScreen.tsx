import React from 'react';
import {View, Text} from 'react-native';
import {useFetchTodo} from './hooks/useFetchTodo';
import {HomeProps} from './models';
import {AppText, Layout} from '../../components';
import {Point, Greeting} from './components';
import {AppColors} from '../../utils';

export const HomeScreen = ({navigation}: HomeProps) => {
  const {loading, products} = useFetchTodo();
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

      {products.slice(0, 3).map(product => {
        return (
          <View key={product.id}>
            <Text style={{color: 'red'}}>{product.product}</Text>
            <Text>{product.points}</Text>
            <Text>{product.createdAt}</Text>
          </View>
        );
      })}
    </Layout>
  );
};
