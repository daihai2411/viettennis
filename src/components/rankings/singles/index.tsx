"use client";

import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { useCallback, useState } from "react";
import Filter from "./Filter";
import { columns, dummy } from "./constants";

const RankingSingles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  let list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setIsLoading(false);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
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

  const renderCell = useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "ranking":
        return (
          <div className="flex justify-start items-center gap-2">
            <div className="text-green-common text-[19px]">{cellValue}</div>
            <div className="text-center text-neutral-500 text-[19px]">-</div>
          </div>
        );
      case "player":
        return (
          <User
            name={
              <div className="justify-start items-start inline-flex gap-1">
                <div className="text-neutral-500 text-[21px] font-bold uppercase">
                  {user.firstName}
                </div>
                <div className="text-neutral-950 text-[21px] font-bold uppercase">
                  {user.lastName}
                </div>
              </div>
            }
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        );
      case "points":
        return (
          <div className="text-center flex justify-center text-green-common text-[21px] font-black">
            {cellValue}
          </div>
        );

      default:
        return (
          <div className="text-center flex justify-center text-neutral-500 text-[21px] font-black">
            {cellValue}
          </div>
        );
    }
  }, []);

  return (
    <>
      <Filter />
      <div className="container mx-auto">
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
                className={
                  column.uid === "player" ? "text-left" : "text-center"
                }
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
      </div>
    </>
  );
};

export default RankingSingles;
