export const requiredParam = (paramName = "") => {
  if (paramName) {
    throw new Error(`Missing param "${paramName}"`);
  }
  throw new Error("Missing param data");
};
