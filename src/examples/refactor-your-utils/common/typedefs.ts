export type MyItem = { id: string; title: string; price: MyItemPrice };

export type MyItemPrice = {
  amount: number;
  currency: MyItemPriceCurrency;
};

export type CurrencyDetail = {
  currency: MyItemPriceCurrency;
  precision: number;
};

export type MyItemPriceCurrency = "JPY" | "SGD";
