// before

/* eslint-disable fp/no-this */
/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-class */
export class MyNameClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getNamePrompt(): string {
    return `my name is ${this.name}`;
  }
}

// after

type MyNameClassEdit = { getNamePrompt: () => string };

export const makeMyNameClassEdit = (name: string): MyNameClassEdit => {
  const getNamePrompt = (): string => {
    return `my name is ${name}`;
  };

  return { getNamePrompt };
};
