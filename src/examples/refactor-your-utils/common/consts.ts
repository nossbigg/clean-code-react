import { MyItem } from "./typedefs";

const appleItem: MyItem = {
  id: "abcd",
  title: "Apple",
  price: { amount: 12.3, currency: "SGD" },
};

const pearItem: MyItem = {
  id: "efgh",
  title: "Pear",
  price: { amount: 10.23, currency: "SGD" },
};

const cornItem: MyItem = {
  id: "ijkl",
  title: "Corn",
  price: { amount: 30.01, currency: "JPY" },
};

export const ITEMS: MyItem[] = [appleItem, pearItem, cornItem];
