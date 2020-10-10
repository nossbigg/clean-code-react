/* eslint-disable fp/no-mutating-methods */
import { MyItem, MyItemPriceCurrency } from "../typedefs";

// item price utils
const sortItemsByPriceAmountAscending = (items: MyItem[]): MyItem[] =>
  items.sort((a, b) => a.price.amount - b.price.amount);

export const getCheapestItem = (items: MyItem[]): MyItem => {
  return sortItemsByPriceAmountAscending(items)[0];
};

export const getMostExpensiveItem = (items: MyItem[]): MyItem => {
  return sortItemsByPriceAmountAscending(items).reverse()[0];
};

// item currency utils
export const filterBySgdItem = (items: MyItem[]) =>
  items.filter(filterByItem("SGD"));

export const filterByJpyItem = (items: MyItem[]) =>
  items.filter(filterByItem("JPY"));

const filterByItem = (targetCurrency: MyItemPriceCurrency) => (item: MyItem) =>
  item.price.currency === targetCurrency;

// item component utils
export const makeItemComponentKey = (item: MyItem) => item.id;
