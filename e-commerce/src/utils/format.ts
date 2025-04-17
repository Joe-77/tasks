export const formatURI = (url: string) => {
  const formattedName = url?.toLowerCase()?.replace(/\s+/g, "-");
  return formattedName;
};
