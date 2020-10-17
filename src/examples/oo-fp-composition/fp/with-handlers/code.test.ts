import { jetDog, jonCat } from "./code";

describe("fp: with handlers ", () => {
  it("creates dog functionality correctly", () => {
    expect(jetDog.name).toEqual("Jet");
    expect(jetDog.tricks).toEqual(["fetch"]);

    expect(jetDog.getName()).toEqual("Jet");
    expect(jetDog.getTricks()).toEqual(["fetch"]);
  });

  it("creates cat functionality correctly", () => {
    expect(jonCat.name).toEqual("Jon");
    expect(jonCat.isSprayed).toEqual(true);

    expect(jonCat.getName()).toEqual("Jon");
    expect(jonCat.checkIsSprayed()).toEqual(true);
  });
});
