export const useSanityQuery = async (query, params = {}) => {
  const { data } = await useSanity().fetch(query, params);
  return { data };
};
