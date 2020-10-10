import { MyItem, MyItemPriceCurrency } from "../../typedefs";

export const filterBySgdItem = (items: MyItem[]) =>
  items.filter(filterByItem("SGD"));

export const filterByJpyItem = (items: MyItem[]) =>
  items.filter(filterByItem("JPY"));

const filterByItem = (targetCurrency: MyItemPriceCurrency) => (item: MyItem) =>
  item.price.currency === targetCurrency;
