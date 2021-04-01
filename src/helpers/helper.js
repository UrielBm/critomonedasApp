export const GetColorValue = (value) => {
  let precio = value.split(" ");
  precio = precio[1];
  if (precio >= 0) {
    return "good";
  }
  return "danger";
};
