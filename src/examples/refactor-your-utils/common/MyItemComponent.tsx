import React from "react";
import { MyItem } from "./typedefs";

type MyItemComponentProps = { item: MyItem };

export const MyItemComponent: React.FC<MyItemComponentProps> = (props) => {
  const { item } = props;
  const { price, title } = item;

  return (
    <div>
      <div>{title}</div>
      <div>
        {price.currency} {price.amount}
      </div>
    </div>
  );
};
