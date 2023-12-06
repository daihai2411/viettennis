"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const TableData = () => {
  const router = useRouter();

  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      start_date: "10/10/2023",
      end_date: "10/10/2023",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      start_date: "10/10/2023",
      end_date: "10/10/2023",
      status: "Paused",
      locale: "Ha noi",
    },
    {
      key: "3",
      name: "Jane Fisher",
      start_date: "10/10/2023",
      end_date: "10/10/2023",
      status: "Active",
      locale: "Ha noi",
    },
    {
      key: "4",
      name: "William Howard",
      start_date: "10/10/2023",
      end_date: "10/10/2023",
      status: "Vacation",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "Tên giải đấu",
    },
    {
      key: "start_date",
      label: "Bắt đầu",
    },
    {
      key: "end_date",
      label: "Kết thúc",
    },
    {
      key: "locale",
      label: "Địa điểm",
    },
    {
      key: "status",
      label: "Trạng thái",
    },
  ];

  const classNames = useMemo(
    () => ({
      tr: ["cursor-pointer, group"],
      th: [
        "bg-transparent",
        "text-default-500",
        "border-b",
        "border-divider",
        "font-normal",
        "text-[15px]",
      ],
      td: [
        "group-hover:first:text-green-common",
        "group-hover:first:underline",
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  const onRowAction = (val) => {
    router.push(`/tournaments/${val}/overview`);
  };

  return (
    <div>
      <Table
        selectionMode="single"
        classNames={classNames}
        onRowAction={onRowAction}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableData;
