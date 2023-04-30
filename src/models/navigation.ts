import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {ProductType} from './product';

export type RootStackParamList = {
  Home: undefined;
  Product: ProductType;
};

export type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type ProductDetailRouteProps = RouteProp<RootStackParamList, 'Product'>;
