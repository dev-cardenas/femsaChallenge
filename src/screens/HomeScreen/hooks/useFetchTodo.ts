import {useState, useEffect} from 'react';
import {api} from '../../../services/index';
import {ProductType} from '../../../models';
import {productsCache} from '../../../constants';
import {productsToSelectType, totalToSelectType, optionsType} from '../models';
import {options} from '../constants';
import {handleProductsResponse} from '../utils';

export const useFetchTodo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<optionsType>(options.ALL);
  const [productToShow, setProductToShow] = useState<ProductType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);

  const [products, setProducts] = useState<productsToSelectType>({
    ALL: [],
    WON: [],
    REDEEMED: [],
  });

  const [totals, setTotals] = useState<totalToSelectType>({
    ALL: 0,
    WON: 0,
    REDEEMED: 0,
  });

  const handleResponse = (data: ProductType[]) => {
    const {totalLocal, productsLocal, totalsLocal} =
      handleProductsResponse(data);

    setTotal(totalLocal);
    setProducts(productsLocal);
    setTotals(totalsLocal);
  };

  useEffect(() => {
    setLoading(true);

    api
      .get<ProductType[]>('/products')
      .then(res => {
        const {data} = res;
        setProductToShow(data.slice(0, 10));
        handleResponse(data);
      })
      .catch(e => {
        console.log(e);
        handleResponse(productsCache);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSelected = (typeSelected: optionsType) => {
    setSelected(typeSelected);
    setProductToShow(products[typeSelected].slice(0, 10));
    setTotal(totals[typeSelected]);
    setPage(1);
  };

  const handleEndReached = () => {
    const newPage = page + 1;
    setPage(newPage);
    const init = page * 10;
    const finish = newPage * 10;

    setProductToShow([
      ...productToShow,
      ...products[selected].slice(init, finish),
    ]);
  };

  return {
    productToShow,
    loading,
    total,
    selected,
    handleSelected,
    handleEndReached,
  };
};
