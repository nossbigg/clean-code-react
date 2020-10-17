export type AnimalType = { name: string; getName(): string };

export type DogType = AnimalType & { tricks: string[]; getTricks(): string[] };

export type CatType = AnimalType & {
  isSprayed: boolean;
  checkIsSprayed(): boolean;
};

const makeGetNameHandler = (name: string) => () => name;

const makeDog = (name: string, tricks: string[]): DogType => {
  return {
    name,
    tricks,
    getName: makeGetNameHandler(name),
    getTricks: () => tricks,
  };
};

const makeCat = (name: string, isSprayed: boolean): CatType => {
  return {
    name,
    isSprayed,
    getName: makeGetNameHandler(name),
    checkIsSprayed: () => isSprayed,
  };
};

export const jetDog: DogType = makeDog("Jet", ["fetch"]);

export const jonCat: CatType = makeCat("Jon", true);
