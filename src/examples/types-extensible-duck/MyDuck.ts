import Duck from "extensible-duck";
import { Duck as DuckClass, DuckOptions } from "./typedefs/extensible-duck";
import { put } from "redux-saga/effects";

import {
  MyDuckState,
  MyDuckAction,
  MyDuckActionTypes,
  MyDuckActionCreators,
  MyDuckSelectors,
  SetPhraseAction,
  SetCostAction,
  MyDuckSagas,
  MyDuckTakes,
  MyDuckConsts,
} from "./typedefs";

export const MYDUCK_INITIAL_STATE: MyDuckState = {
  name: "Mr. Ducky",
  phrase: "quack!",
  cost: 1,
};

const myDuckOptions: DuckOptions<
  MyDuckState,
  MyDuckAction,
  MyDuckActionTypes,
  MyDuckActionCreators,
  MyDuckSelectors,
  MyDuckSagas,
  MyDuckTakes,
  MyDuckConsts
> = {
  namespace: "my-app",
  store: "myduck",
  types: ["SET_PHRASE", "SET_COST"],
  initialState: MYDUCK_INITIAL_STATE,
  reducer: (state, action, duck) => {
    switch (action.type) {
      case duck.types.SET_PHRASE:
        const setPhraseAction = action as SetPhraseAction;
        return { ...state, phrase: setPhraseAction.phrase };
      case duck.types.SET_COST:
        const setCostAction = action as SetCostAction;
        return { ...state, cost: setCostAction.cost };
      default:
        return state;
    }
  },
  selectors: {
    getPhrase: (state) => state.phrase,
    getCost: (state) => state.cost,
  },
  creators: (duck) => ({
    setPhrase: (phrase) => ({ type: duck.types.SET_PHRASE, phrase }),
    setCost: (cost) => ({ type: duck.types.SET_COST, cost }),
  }),
  sagas: (duck) => ({
    setWackyPhrase: function* () {
      const action: SetPhraseAction = {
        type: duck.types.SET_PHRASE,
        phrase: "yeehaw!",
      };
      yield put(action);
    },
  }),
  consts: { myConsts: ["HEE", "HAW"], myConsts2: ["SEE", "SAW"] },
};

export const MyDuck: DuckClass<
  MyDuckState,
  MyDuckAction,
  MyDuckActionTypes,
  MyDuckActionCreators,
  MyDuckSelectors,
  MyDuckSagas,
  MyDuckTakes,
  MyDuckConsts
> = new Duck(myDuckOptions);
