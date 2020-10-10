import { getCheapestItem, getMostExpensiveItem } from "../itemSortUtils";
import { testMocks } from "./testMocks";

describe("itemSortUtils", () => {
  const { mockItems, pearItem, cornItem } = testMocks;

  it("gets cheapest item", () => {
    expect(getCheapestItem(mockItems)).toEqual(pearItem);
  });

  it("gets most expensive item", () => {
    expect(getMostExpensiveItem(mockItems)).toEqual(cornItem);
  });
});
