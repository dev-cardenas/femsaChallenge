import {AxiosResponse} from 'axios';
import {api} from '../../api';
import {ProductType} from '../../../models';

export const getProducts = async (): Promise<ProductType[]> => {
  const {data} = await api.get<void, AxiosResponse<ProductType[]>>('/products');
  return data;
};
