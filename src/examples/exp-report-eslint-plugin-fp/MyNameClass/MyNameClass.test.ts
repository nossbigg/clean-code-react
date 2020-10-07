import { makeMyNameClassEdit, MyNameClass } from "./MyNameClass";

describe("MyNameClass", () => {
  it("makes correct name prompt", () => {
    const myNameClass = new MyNameClass("jeff");

    const result = myNameClass.getNamePrompt();
    expect(result).toEqual("my name is jeff");
  });
});

describe("MyNameClassEdit", () => {
  it("makes correct name prompt", () => {
    const myNameClassEdit = makeMyNameClassEdit("jeff");

    const result = myNameClassEdit.getNamePrompt();
    expect(result).toEqual("my name is jeff");
  });
});
