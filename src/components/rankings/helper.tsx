import { Key } from "react";

export const getColorCell = (id: number) => {
  const POINT_BLUE = 1;
  const POINT_RED = 2;

  if (id === POINT_BLUE) {
    return "#1D61BC";
  } else if (id === POINT_RED) {
    return "#FF0000";
  } else "";
};

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
