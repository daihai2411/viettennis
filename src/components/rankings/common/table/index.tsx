"use client";

import service from "@/core/services/rankings/RankingsService";
import { convertCamelCaseToLine } from "@/helpers/value";
import {
  SortDescriptor,
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
import { useEffect, useMemo, useRef, useState } from "react";
import { changeKeySort } from "../../helper";

type IProp = {
  params: object;
  changeParams: (val: any) => void;
  columns: any[];
  renderCell: any;
  sortDescriptor: object;
  setSortDescriptor: (val: any) => void;
};

const TableData = ({
  params,
  changeParams,
  columns,
  renderCell,
  sortDescriptor,
  setSortDescriptor,
}: IProp) => {
  const ref = useRef({ page: 0 });

  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  let list = useAsyncList({
    async load({ cursor }: any) {
      if (cursor) {
        setIsLoading(false);
      }
      const res = (await service.getListRankPoint(
        convertCamelCaseToLine({
          ...params,
          page: ref.current.page + 1,
        })
      )) as any;
      setIsLoading(false);
      setHasMore(ref.current.page < Math.round(res.total / res.page_size));
      ref.current.page = res.page;

      return {
        items: res.data,
        cursor: ref.current.page < Math.round(res.total / res.page_size),
      };
    },
  });

  const [loaderRef, scrollRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: () => {
      if (!list.isLoading) list.loadMore();
    },
  });

  const classNames = useMemo(
    () => ({
      th: [
        "bg-transparent",
        "text-default-500",
        "border-b",
        "border-divider",
        "font-normal",
        "text-[15px]",
      ],
      td: [
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
      base: "max-h-[600px] overflow-hidden",
    }),
    []
  );

  const onSortChange = (descriptor: SortDescriptor) => {
    ref.current.page = 0;
    changeParams({
      sortBy: changeKeySort(descriptor.column, descriptor.direction),
    });
    setSortDescriptor(descriptor);
    list.reload();
  };

  useEffect(() => {
    ref.current.page = 0;
    list.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)]);

  return (
    <>
      <Table
        baseRef={scrollRef}
        bottomContent={
          hasMore ? (
            <div className="flex w-full justify-center gap-2">
              <Spinner ref={loaderRef} color="success" />
              <div>Đang tải thêm người chơi</div>
            </div>
          ) : null
        }
        isCompact
        classNames={classNames}
        sortDescriptor={sortDescriptor}
        onSortChange={onSortChange}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              className={`text-[#5E5E5E] ${
                column.uid === "name" ? "text-left" : "text-center"
              }`}
              allowsSorting
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={list.items}
          loadingContent={<Spinner color="success" />}
        >
          {(item: any) => (
            <TableRow key={item.birth_year}>
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
