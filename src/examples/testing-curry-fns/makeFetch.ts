/* eslint-disable fp/no-throw */

export type MakeFetchOptions = { endpointSuffix: string; fetchOptions: RequestInit };

export const makeFetch = (baseUrl: string) => async (
  options: MakeFetchOptions,
) => {
  const { endpointSuffix, fetchOptions } = options;

  const endpointUrl = `${baseUrl}${endpointSuffix}`;
  const result = await fetch(endpointUrl, fetchOptions);

  const is200Ok = result.status === 200;
  if (!is200Ok) {
    throw new Error("request error");
  }

  const jsonBody = await result.json();
  return jsonBody;
};
