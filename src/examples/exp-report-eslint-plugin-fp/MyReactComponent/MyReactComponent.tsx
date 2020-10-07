import React, { useState } from "react";

// before

type MyReactComponentState = { counter: number };

/* eslint-disable fp/no-class */
/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-this */
/* eslint-disable fp/no-let */
export class MyReactComponent extends React.Component<
  {},
  MyReactComponentState
> {
  constructor(props: {}) {
    super(props);
    this.state = { counter: 0 };
  }

  incrementCounter() {
    this.setState((previousState) => {
      return { counter: previousState.counter + 1 };
    });
  }

  render() {
    return (
      <div>
        <span>Counter: {this.state.counter}</span>
        <button
          data-testid="button-increment"
          onClick={() => this.incrementCounter()}
        >
          Increment
        </button>
      </div>
    );
  }
}

// after

export const MyReactComponentEdit: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <span>Counter: {counter}</span>
      <button
        data-testid="button-increment"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
};
