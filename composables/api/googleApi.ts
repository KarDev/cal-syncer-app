import { useHelper } from "../useHelper";

export const googleApi = () => {
  const getGoogleAuthUrl = async (): Promise<string> => {
    const { url } = await $fetch<any>(useHelper().getUrl(`/google`), {
      method: "GET",
    }).catch((error) => {
      console.error(error, `Error fetching google auth`);
      return null;
    });

    return url as string;
  };

  const validateToken = async (oauthToken: string): Promise<boolean> => {
    let url = `https://oauth2.googleapis.com/tokeninfo?access_token=${oauthToken}`;
    let isValid: boolean = true;
    await $fetch<any>(url).catch((error) => {
      isValid = false;
      console.error(error, `Invalid AccessToken`);
      return null;
    });
    return isValid;
  };

  return {
    getGoogleAuthUrl,
    validateToken,
  };
};
