import { jetDog, jonCat } from "./code";

describe("oo: functional inheritance", () => {
  it("creates dog functionality correctly", () => {
    expect(jetDog.getName()).toEqual("Jet");
    expect(jetDog.getTricks()).toEqual(["fetch"]);
  });

  it("creates cat functionality correctly", () => {
    expect(jonCat.getName()).toEqual("Jon");
    expect(jonCat.checkIsSprayed()).toEqual(true);
  });
});
