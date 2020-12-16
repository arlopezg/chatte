import format from "date-fns/format";

export const formatDate = (unix, newFormat) => {
  return format(unix, newFormat);
};
