import { Action } from "redux";
import { PutEffect } from "redux-saga/effects";

// state
export type MyDuckState = {
  name: string;
  phrase: string;
  cost: number;
};

// actions
type MyDuckActionBase = Action<string>;
export type MyDuckAction = SetPhraseAction | SetCostAction;

export interface SetPhraseAction extends MyDuckActionBase {
  phrase: string;
}
export interface SetCostAction extends MyDuckActionBase {
  cost: number;
}

// action types
export type MyDuckActionTypes = {
  SET_PHRASE: unknown;
  SET_COST: unknown;
};

// action creators
export type MyDuckActionCreators = {
  setPhrase: (phrase: string) => SetPhraseAction;
  setCost: (cost: number) => SetCostAction;
};

// selectors
export type MyDuckSelectors = {
  getPhrase: (s: MyDuckState) => string;
  getCost: (s: MyDuckState) => number;
};

// sagas
export type MyDuckSagas = {
  setWackyPhrase: () => Generator<PutEffect<SetPhraseAction>, void, unknown>;
};

// takes
export type MyDuckTakes = any[];

// consts
export type MyDuckConsts = { myConsts: string[]; myConsts2: string[] };
