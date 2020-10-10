/* eslint-disable fp/no-mutating-methods */
import { MyItem } from "../../typedefs";

const sortItemsByPriceAmountAscending = (items: MyItem[]): MyItem[] =>
  items.sort((a, b) => a.price.amount - b.price.amount);

export const getCheapestItem = (items: MyItem[]): MyItem => {
  return sortItemsByPriceAmountAscending(items)[0];
};

export const getMostExpensiveItem = (items: MyItem[]): MyItem => {
  return sortItemsByPriceAmountAscending(items).reverse()[0];
};
