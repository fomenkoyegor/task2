export const uuid = () => Math.floor(Math.random() * 9999) + Date.now();
export const formatDate = (d: any) =>
  new Intl.DateTimeFormat("en-AU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(d));

export const parseDate = (str: any) => {
  /* eslint-disable */
  return str.match(/\d+[-.\/]?\d+[.,\/]\d+[.,\/]\d+/g) || [];
};
