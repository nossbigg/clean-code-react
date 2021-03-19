import { makeMockCurryFn } from "jest-mock-curry-fn";
import { getUserInfo } from "./getUserInfo";
import * as makeFetchImport from "./makeFetch";

describe("getUserInfo", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const doTest = async () => {
    const mockApiResponse = { name: "jeff", id: 123 };

    const mockMakeFetch = makeMockCurryFn({
      nCurriedFns: 2,
      tailFnReturnValue: mockApiResponse,
    });
    jest
      .spyOn(makeFetchImport, "makeFetch")
      .mockImplementation(mockMakeFetch.headMockFn);

    const result = await getUserInfo();

    return { result, mockMakeFetch };
  };

  it("calls api correctly", async () => {
    const { mockMakeFetch } = await doTest();

    const expectedBaseUrl = "https://api.mywebsite.com";
    const expectedOptions = {
      endpointSuffix: "/user",
      fetchOptions: { method: "GET" },
    };
    mockMakeFetch.expectMockFnsCalledWith(expectedBaseUrl)(expectedOptions);
  });

  it("returns user info", async () => {
    const { result } = await doTest();

    const expectedResult = { name: "jeff", id: 123 };
    expect(result).toEqual(expectedResult);
  });

  it("calls api correctly (manual mock setup)", async () => {
    const mockApiResponse = { name: "jeff", id: 123 };

    const mockMakeFetch = jest.fn();
    const mockMakeFetch2ndFn = jest.fn();
    mockMakeFetch.mockReturnValue(mockMakeFetch2ndFn);
    mockMakeFetch2ndFn.mockReturnValue(mockApiResponse);

    jest.spyOn(makeFetchImport, "makeFetch").mockImplementation(mockMakeFetch);

    await getUserInfo();

    const expectedBaseUrl = "https://api.mywebsite.com";
    const expectedOptions = {
      endpointSuffix: "/user",
      fetchOptions: { method: "GET" },
    };
    expect(mockMakeFetch).toHaveBeenCalledWith(expectedBaseUrl);
    expect(mockMakeFetch2ndFn).toHaveBeenCalledWith(expectedOptions);
  });
});
