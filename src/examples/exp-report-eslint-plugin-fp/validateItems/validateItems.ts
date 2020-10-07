export type MyItem = { name: string; price: number };

const PRICE_THRESHOLD = 5;

// before

/* eslint-disable fp/no-throw */
export const validateItems = (items: MyItem[]): boolean => {
  items.forEach((item) => {
    const { name, price } = item;
    if (price > PRICE_THRESHOLD) {
      throw new Error(`item '${name}' price exceeded`);
    }
  });

  return true;
};

// after

type ValidateItemsEditResult = { pass: boolean; errMessage: string };

export const validateItems_edit = (
  items: MyItem[],
): ValidateItemsEditResult => {
  const initialResult: ValidateItemsEditResult = { pass: true, errMessage: "" };

  const result: ValidateItemsEditResult = items.reduce((acc, item) => {
    const { name, price } = item;
    if (price > PRICE_THRESHOLD) {
      return { pass: false, errMessage: `item '${name}' price exceeded` };
    }
    return acc;
  }, initialResult);

  return result;
};
