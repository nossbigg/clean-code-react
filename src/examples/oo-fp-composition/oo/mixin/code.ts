/* eslint-disable fp/no-this */

const animalMixin = {
  getName(): string {
    return (this as any).name;
  },
};

const dogMixin = {
  getTricks(): string[] {
    return (this as any).tricks;
  },
};

const catMixin = {
  checkIsSprayed(): boolean {
    return (this as any).isSprayed;
  },
};

const makeDog = (name: string, tricks: string[]) => {
  const dog = Object.assign({}, animalMixin, dogMixin, { name, tricks });
  return dog;
};

const makeCat = (name: string, isSprayed: boolean) => {
  const cat = Object.assign({}, animalMixin, catMixin, { name, isSprayed });
  return cat;
};

export const jetDog = makeDog("Jet", ["fetch"]);

export const jonCat = makeCat("Jon", true);
