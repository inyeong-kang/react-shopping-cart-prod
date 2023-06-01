import { atom, selector } from 'recoil';

import { cartAtom } from './cartProductData';
import { CartProduct } from '../types/product';

export const checkedCartItemIdsAtom = atom<number[]>({
  key: 'checkedItemState',
  default: [],
});

export const checkedListSelector = selector<number>({
  key: 'checkedListState',
  get: ({ get }) => {
    const checkedCartItemIds = get(checkedCartItemIdsAtom);

    return checkedCartItemIds.length;
  },
});

export const totalPriceSelector = selector<number>({
  key: 'totalPriceState',
  get: ({ get }) => {
    const totalPrice = get(checkedCartItemsSelector).reduce(
      (total, { quantity, product }) => {
        return total + quantity * product.price;
      },
      0
    );
    return totalPrice;
  },
});

export const checkedCartItemsSelector = selector<CartProduct[]>({
  key: 'checkedCartProductState',
  get: ({ get }) => {
    const checkedCartItemIds = get(checkedCartItemIdsAtom);
    const checkedCartItems = get(cartAtom).filter((item) =>
      checkedCartItemIds.includes(item.cartItemId)
    );
    return checkedCartItems;
  },
});
