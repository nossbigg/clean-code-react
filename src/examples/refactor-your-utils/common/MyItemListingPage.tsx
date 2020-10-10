import React from "react";
import { MyItemComponent } from "./MyItemComponent";
import { ITEMS } from "./consts";
import { MyItem } from "./typedefs";
import {
  filterBySgdItem,
  getCheapestItem,
  filterByJpyItem,
  getMostExpensiveItem,
  makeItemComponentKey,
} from "../bad/utils";

export const MyItemListingPage: React.FC = () => {
  const items: MyItem[] = ITEMS;

  const sgdItems = filterBySgdItem(items);
  const cheapestSgdItem = getCheapestItem(sgdItems);

  const jpyItems = filterByJpyItem(items);
  const mostExpensiveJpyItem = getMostExpensiveItem(jpyItems);

  return (
    <div>
      <div>
        <div>All Items</div>
        <div>{renderItems(items)}</div>
      </div>
      <div>
        <div>SGD items</div>
        <div>{renderItems(sgdItems)}</div>
        <div>Most expensive SGD item</div>
        <div>{renderItems([cheapestSgdItem])}</div>
      </div>
      <div>
        <div>JPY items</div>
        <div>{renderItems(jpyItems)}</div>
        <div>Cheapest JPY item</div>
        <div>{renderItems([mostExpensiveJpyItem])}</div>
      </div>
    </div>
  );
};

const renderItems = (items: MyItem[]): React.ReactNode => {
  return (
    <>
      {items.map((item) => (
        <MyItemComponent item={item} key={makeItemComponentKey(item)} />
      ))}
    </>
  );
};
