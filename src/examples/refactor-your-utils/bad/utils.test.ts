import { MyItem } from "../typedefs";
import {
  filterByJpyItem,
  filterBySgdItem,
  getCheapestItem,
  getMostExpensiveItem,
  makeItemComponentKey,
} from "./utils";

describe("utils", () => {
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
  const mockItems: MyItem[] = [appleItem, pearItem, cornItem];

  it("gets cheapest item", () => {
    expect(getCheapestItem(mockItems)).toEqual(pearItem);
  });

  it("gets most expensive item", () => {
    expect(getMostExpensiveItem(mockItems)).toEqual(cornItem);
  });

  it("filters by sgd items", () => {
    expect(filterBySgdItem(mockItems)).toEqual([appleItem, pearItem]);
  });

  it("filters by jpy items", () => {
    expect(filterByJpyItem(mockItems)).toEqual([cornItem]);
  });

  it("makes item component key", () => {
    expect(makeItemComponentKey(appleItem)).toEqual("abcd");
  });
});
