import React from 'react';
import {View, Text} from 'react-native';
import {useFetchTodo} from './hooks/useFetchTodo';
import {HomeProps} from './models';
import {AppText} from '../../components';

export const HomeScreen = ({navigation}: HomeProps) => {
  const {loading, products} = useFetchTodo();
  return (
    <View>
      <AppText type="h3" bold>
        Bienvenido de vuelta!
      </AppText>
      <AppText type="h4">Ruben Rodriguez</AppText>
      {products.slice(0, 3).map(product => {
        return (
          <View key={product.id}>
            <Text style={{color: 'red'}}>{product.product}</Text>
            <Text>{product.points}</Text>
            <Text>{product.createdAt}</Text>
          </View>
        );
      })}
    </View>
  );
};
