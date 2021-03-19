import { makeFetch } from "./makeFetch";

const API_STAGING_URL = "https://api.mywebsite.com";

export const getUserInfo = async (userId: string) => {
  const userInfo = await makeFetch(API_STAGING_URL)({
    endpointSuffix: `/user/${userId}`,
    fetchOptions: { method: "GET" },
  });
  const { name, id } = userInfo;
  return { name, id };
};
