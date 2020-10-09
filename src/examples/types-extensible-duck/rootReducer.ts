import { combineReducers } from "redux";
import { MyDuck } from "./MyDuck";
import { MyDuckAction, MyDuckState } from "./typedefs";

export type RootReducerState = { myduck: MyDuckState };
export type RootReducerAction = MyDuckAction;

export const rootReducer = combineReducers<RootReducerState, RootReducerAction>(
  {
    [MyDuck.store]: MyDuck.reducer,
  } as any,
);
