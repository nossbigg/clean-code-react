import { MyDuck } from "./MyDuck";
import { makeRootStore } from "./makeRootStore";
import { MyDuckState } from "./typedefs";
import { RootReducerState } from "./rootReducer";

describe("myDuck", () => {
  const myduckState: MyDuckState = {
    name: "Mr. Ducky",
    phrase: "quack!",
    cost: 1,
  };
  const initialState: RootReducerState = {
    myduck: myduckState,
  };

  describe("selectors", () => {
    it("gets phrase", () => {
      const result = MyDuck.selectors.getPhrase(initialState.myduck);
      expect(result).toEqual("quack!");
    });

    it("gets cost", () => {
      const result = MyDuck.selectors.getCost(initialState.myduck);
      expect(result).toEqual(1);
    });
  });

  describe("reducer + creators", () => {
    it("sets phrase", () => {
      const { store } = makeRootStore();
      store.dispatch(MyDuck.creators.setPhrase("whee!"));

      const result = store.getState();
      expect(result.myduck.phrase).toEqual("whee!");
    });

    it("sets cost", () => {
      const { store } = makeRootStore();
      store.dispatch(MyDuck.creators.setCost(9));

      const result = store.getState();
      expect(result.myduck.cost).toEqual(9);
    });
  });

  describe("sagas", () => {
    it("runs setWackyPhrase saga", () => {
      const { store, sagaMiddleware } = makeRootStore();

      sagaMiddleware.run(MyDuck.sagas.setWackyPhrase);
      const result = store.getState();
      expect(result.myduck.phrase).toEqual("yeehaw!");
    });
  });
});
