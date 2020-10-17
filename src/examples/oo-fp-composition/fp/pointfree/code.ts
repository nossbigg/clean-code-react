export type AnimalType = { name: string };

export type DogType = AnimalType & { tricks: string[] };

export type CatType = AnimalType & { isSprayed: boolean };

export const getName = (a: AnimalType): string => a.name;

export const getTricks = (d: DogType): string[] => d.tricks;

export const checkIsSprayed = (c: CatType): boolean => c.isSprayed;

const makeDog = (name: string, tricks: string[]): DogType => {
  return {
    name,
    tricks,
  };
};

const makeCat = (name: string, isSprayed: boolean): CatType => {
  return {
    name,
    isSprayed,
  };
};

export const jetDog: DogType = makeDog("Jet", ["fetch"]);

export const jonCat: CatType = makeCat("Jon", true);
