import { validateItems, validateItems_edit, MyItem } from "./validateItems";

const MOCK_ITEMS: MyItem[] = [
  { name: "pencil", price: 1 },
  { name: "ruler", price: 2 },
];
const EXPENSIVE_ITEM: MyItem = { name: "bag", price: 10 };

describe("validateItems", () => {
  it("passes validation", () => {
    const result = validateItems(MOCK_ITEMS);
    expect(result).toEqual(true);
  });

  it("throws error for expensive item", () => {
    const withExpensiveItem = [...MOCK_ITEMS, EXPENSIVE_ITEM];
    const doFunction = () => validateItems(withExpensiveItem);

    expect(doFunction).toThrowError("item 'bag' price exceeded");
  });
});

describe("validateItems_edit", () => {
  it("passes validation", () => {
    const result = validateItems_edit(MOCK_ITEMS);
    expect(result.pass).toEqual(true);
    expect(result.errMessage).toEqual("");
  });

  it("throws error for expensive item", () => {
    const withExpensiveItem = [...MOCK_ITEMS, EXPENSIVE_ITEM];
    const result = validateItems_edit(withExpensiveItem);
    expect(result.pass).toEqual(false);
    expect(result.errMessage).toEqual("item 'bag' price exceeded");
  });
});
