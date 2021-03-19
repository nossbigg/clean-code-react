import { makeMockCurryFn } from "jest-mock-curry-fn";
import { getUserInfo } from "./getUserInfo";
import * as makeFetchImport from "./makeFetch";

type DoTestArgs = { userId: string };

describe("getUserInfo", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const doTest = async (args: DoTestArgs) => {
    const { userId } = args;
    const mockApiResponse = { name: "jeff", id: userId };

    const mockMakeFetch = makeMockCurryFn({
      nCurriedFns: 2,
      tailFnReturnValue: mockApiResponse,
    });
    jest
      .spyOn(makeFetchImport, "makeFetch")
      .mockImplementation(mockMakeFetch.headMockFn);

    const result = await getUserInfo("user-id-1");

    return { result, mockMakeFetch };
  };

  it("calls api correctly", async () => {
    const { mockMakeFetch } = await doTest({ userId: "123" });

    const expectedBaseUrl = "https://api.mywebsite.com";
    const expectedOptions = {
      endpointSuffix: "/user/123",
      fetchOptions: { method: "GET" },
    };
    mockMakeFetch.expectMockFnsCalledWith(expectedBaseUrl)(expectedOptions);
  });

  it("returns user info", async () => {
    const { result } = await doTest({ userId: "123" });

    const expectedResult = { name: "jeff", id: "123" };
    expect(result).toEqual(expectedResult);
  });

  describe("complex scenarios", () => {
    it("returns different user info", async () => {
      const mockApiResponse = { name: "jeff", id: "123" };
      const mockMakeFetch = makeMockCurryFn({
        nCurriedFns: 2,
        tailFnReturnValue: mockApiResponse,
      });
      const { headMockFn, tailMockFn } = mockMakeFetch;

      jest.spyOn(makeFetchImport, "makeFetch").mockImplementation(headMockFn);

      const mockResponseHandler = (
        options: makeFetchImport.MakeFetchOptions,
      ) => {
        const { endpointSuffix } = options;
        if (endpointSuffix.endsWith("123")) {
          return { name: "bob", id: "123" };
        }
        if (endpointSuffix.endsWith("456")) {
          return { name: "ross", id: "456" };
        }
      };
      tailMockFn.mockImplementation(mockResponseHandler);

      const userBob = await getUserInfo("123");
      expect(userBob).toEqual({ name: "bob", id: "123" });
      expect(tailMockFn).not.toHaveBeenCalledWith(
        expect.objectContaining({ endpointSuffix: "/user/456" }),
      );

      const userRoss = await getUserInfo("456");
      expect(userRoss).toEqual({ name: "ross", id: "456" });
    });

    it("calls api correctly (manual mock setup)", async () => {
      const mockApiResponse = { name: "jeff", id: 123 };

      const mockMakeFetch = jest.fn();
      const mockMakeFetch2ndFn = jest.fn();
      mockMakeFetch.mockReturnValue(mockMakeFetch2ndFn);
      mockMakeFetch2ndFn.mockReturnValue(mockApiResponse);

      jest
        .spyOn(makeFetchImport, "makeFetch")
        .mockImplementation(mockMakeFetch);

      await getUserInfo("123");

      const expectedBaseUrl = "https://api.mywebsite.com";
      const expectedOptions = {
        endpointSuffix: "/user/123",
        fetchOptions: { method: "GET" },
      };
      expect(mockMakeFetch).toHaveBeenCalledWith(expectedBaseUrl);
      expect(mockMakeFetch2ndFn).toHaveBeenCalledWith(expectedOptions);
    });
  });
});
