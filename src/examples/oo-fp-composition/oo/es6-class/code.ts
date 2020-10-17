/* eslint-disable fp/no-this */
/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-class */

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

class Dog extends Animal {
  tricks: string[];

  constructor(name: string, tricks: string[]) {
    super(name);
    this.tricks = tricks;
  }

  getTricks(): string[] {
    return this.tricks;
  }
}

class Cat extends Animal {
  isSprayed: boolean;

  constructor(name: string, isSprayed: boolean) {
    super(name);
    this.isSprayed = isSprayed;
  }

  checkIsSprayed(): boolean {
    return this.isSprayed;
  }
}

export const jetDog = new Dog("Jet", ["fetch"]);

export const jonCat = new Cat("Jon", true);
