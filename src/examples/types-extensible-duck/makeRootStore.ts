import { applyMiddleware, createStore } from "redux";
import { MYDUCK_INITIAL_STATE } from "./MyDuck";
import { rootReducer, RootReducerState } from "./rootReducer";
import createSagaMiddleware from "redux-saga";

const INITIAL_ROOT_STATE: RootReducerState = {
  myduck: MYDUCK_INITIAL_STATE,
};

export const makeRootStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, INITIAL_ROOT_STATE, middlewares);

  return { store, sagaMiddleware };
};
