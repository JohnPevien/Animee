export const limitCharacters = (str: string, limit: number) => {
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  }
  return str;
};