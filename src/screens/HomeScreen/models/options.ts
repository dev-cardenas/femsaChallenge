import {ProductType} from '../../../models';

export type optionsType = 'ALL' | 'WON' | 'REDEEMED';

export type productsToSelectType = {
  ALL: ProductType[];
  WON: ProductType[];
  REDEEMED: ProductType[];
};

export type totalToSelectType = {
  ALL: number;
  WON: number;
  REDEEMED: number;
};
