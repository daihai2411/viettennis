"use client";

import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { useState } from "react";
import { dummy } from "../dummyData";
import { columns, renderCell } from "./constants";

const TableData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  let list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setIsLoading(false);
      }
      const res = await fetch(
        cursor || "https://swapi.py4e.com/api/people/?search=",
        { signal }
      );
      let json = await res.json();
      setHasMore(json.next !== null);
      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: list.loadMore,
  });

  return (
    <>
      <Table
        baseRef={scrollerRef}
        bottomContent={
          hasMore ? (
            <div className="flex w-full justify-center gap-2">
              <Spinner ref={loaderRef} color="success" />
              <div> Loading More Players</div>
            </div>
          ) : null
        }
        classNames={{
          base: "max-h-[820px] overflow-hidden",
          table: "min-h-[400px]",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              className={`text-[#5E5E5E] !text-[15px] !font-normal ${
                column.uid === "player" ? "text-left" : "text-center"
              }`}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={dummy}
          loadingContent={<Spinner color="success" />}
        >
          {(item: any) => (
            <TableRow key={item.ranking}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default TableData;
