import {
  capitalizeOddIndexChars,
  capitalizeOddIndexChars_edit,
} from "./capitalizeOddIndexChars";

describe("capitalizeOddIndexChars", () => {
  it("capitalized odd index characters", () => {
    const result = capitalizeOddIndexChars("hard work hustle 24/7");
    expect(result).toEqual("hArD WoRk hUsTlE 24/7");
  });
});

describe("capitalizeOddIndexChars_edit", () => {
  it("capitalized odd index characters", () => {
    const result = capitalizeOddIndexChars_edit("hard work hustle 24/7");
    expect(result).toEqual("hArD WoRk hUsTlE 24/7");
  });
});
