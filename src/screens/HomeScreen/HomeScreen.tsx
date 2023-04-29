import React from 'react';
import {View, Text} from 'react-native';
import {useFetchTodo} from './hooks/useFetchTodo';
import {HomeProps} from './models';
import {Container} from '../../components/Container';

export const HomeScreen = ({navigation}: HomeProps) => {
  const {loading, products} = useFetchTodo();
  return (
    <Container>
      <Text>Home</Text>
      {products.slice(0, 3).map(product => {
        return (
          <View key={product.id}>
            <Text style={{color: 'red'}}>{product.product}</Text>
            <Text>{product.points}</Text>
            <Text>{product.createdAt}</Text>
          </View>
        );
      })}
    </Container>
  );
};
