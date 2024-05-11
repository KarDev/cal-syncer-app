export const useHelper = () => {
  const config = useRuntimeConfig();

  const getUrl = (urlPart: string) => {
    return new URL(urlPart, config.public.apiUrl as string).toString();
  };

  const isAuthorized = () => {
    return localStorage.getItem("userId") !== null;
  };

  return {
    getUrl,
    isAuthorized,
  };
};
