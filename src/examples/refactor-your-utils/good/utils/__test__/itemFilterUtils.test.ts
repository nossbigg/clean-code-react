import { filterByJpyItem, filterBySgdItem } from "../itemFilterUtils";
import { testMocks } from "./testMocks";

describe("itemRenderUtils", () => {
  const { mockItems, appleItem, pearItem, cornItem } = testMocks;

  it("filters by sgd items", () => {
    expect(filterBySgdItem(mockItems)).toEqual([appleItem, pearItem]);
  });

  it("filters by jpy items", () => {
    expect(filterByJpyItem(mockItems)).toEqual([cornItem]);
  });
});
