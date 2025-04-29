export const useSession = () => {
  return useNuxtApp().$auth.useSession(useFetch);
};
