import {useState, useEffect} from 'react';
import {api} from '../../../services/index';
import {ProductType} from '../../../models/index';

export const useFetchTodo = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [products, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    setLoading(true);
    api
      .get<ProductType[]>('/products')
      .then(res => {
        setProduct(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {products, loading};
};
