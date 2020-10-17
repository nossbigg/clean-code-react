const animalMixin = (name: string) => {
  return {
    getName(): string {
      return name;
    },
  };
};

const dogMixin = (tricks: string[]) => {
  return {
    getTricks(): string[] {
      return tricks;
    },
  };
};

const catMixin = (isSprayed: boolean) => {
  return {
    checkIsSprayed(): boolean {
      return isSprayed;
    },
  };
};

const makeDog = (name: string, tricks: string[]) => {
  const dog = Object.assign({}, animalMixin(name), dogMixin(tricks));
  return dog;
};

const makeCat = (name: string, isSprayed: boolean) => {
  const cat = Object.assign({}, animalMixin(name), catMixin(isSprayed));
  return cat;
};

export const jetDog = makeDog("Jet", ["fetch"]);

export const jonCat = makeCat("Jon", true);
