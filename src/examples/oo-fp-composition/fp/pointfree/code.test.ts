import { jetDog, jonCat, checkIsSprayed, getName, getTricks } from "./code";

describe("fp: pointfree", () => {
  it("creates dog functionality correctly", () => {
    expect(jetDog.name).toEqual("Jet");
    expect(jetDog.tricks).toEqual(["fetch"]);

    expect(getName(jetDog)).toEqual("Jet");
    expect(getTricks(jetDog)).toEqual(["fetch"]);
  });

  it("creates cat functionality correctly", () => {
    expect(jonCat.name).toEqual("Jon");
    expect(jonCat.isSprayed).toEqual(true);

    expect(getName(jonCat)).toEqual("Jon");
    expect(checkIsSprayed(jonCat)).toEqual(true);
  });
});
