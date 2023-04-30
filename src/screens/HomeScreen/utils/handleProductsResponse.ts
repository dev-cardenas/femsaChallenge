import {ProductType} from '../../../models';

export const handleProductsResponse = (data: ProductType[]) => {
  const wonArray: ProductType[] = [];
  const redeemedArray: ProductType[] = [];
  let totalLocal = 0;
  let totalWonLocal = 0;
  let totalRedeemedLocal = 0;

  data.forEach(product => {
    const {points, is_redemption} = product;
    if (is_redemption) {
      wonArray.push(product);
      totalLocal = totalLocal + points;
      totalWonLocal = totalWonLocal + points;
    } else {
      redeemedArray.push(product);
      totalRedeemedLocal = totalRedeemedLocal + -points;
      totalLocal = totalLocal + -points;
    }
  });

  return {
    totalLocal,
    productsLocal: {
      ALL: data,
      WON: wonArray,
      REDEEMED: redeemedArray,
    },
    totalsLocal: {
      ALL: totalLocal,
      WON: totalWonLocal,
      REDEEMED: totalRedeemedLocal,
    },
  };
};
