import { makeItemComponentKey } from "../itemRenderUtils";
import { testMocks } from "./testMocks";

describe("itemRenderUtils", () => {
  const { appleItem } = testMocks;

  it("makes item component key", () => {
    expect(makeItemComponentKey(appleItem)).toEqual("abcd");
  });
});
