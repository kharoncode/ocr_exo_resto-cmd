import * as ProductList from '@common/models';

export function getProductList(state) {
   return state?.list;
}
export function getTotalOrder(state) {
   return getProductList(state)?.reduce(
      (prv, cur) => Math.round((cur.price + prv) * 100) / 100,
      0
   );
}
export const isVoucherAvailable = (name) => (state) => {
   return getProductList(state)?.find((product) => product.title === name);
};

export const getQuantityProductPerNam = (name) => (state) => {
   return getProductList(state).filter((product) => product.title === name)
      .length;
};
export const getListQuantityProductPerName = (state) => {
   return Object.values(ProductList).map((product) => ({
      title: product.title,
      quantity: getQuantityProductPerNam(product.title)(state),
   }));
};
