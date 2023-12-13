import { Key } from "react";

export const changeKeySort = (
  column: Key | undefined,
  typeSearch: string | undefined
) => {
  if (column) {
    const keySort = typeSearch === "ascending" ? "asc" : "desc";
    return [
      column === "point_vtr" || column === "point_vtr_solo" ? "point" : column,
      keySort,
    ].join("_");
  }
  return undefined;
};
