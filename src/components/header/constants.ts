import { ROUTERS } from "@/const/router";

export const headers = [
  {
    key: 1,
    label: "Giải đấu",
    route: ROUTERS.TOURNAMENTS,
  },
  {
    key: 2,
    label: "Điểm số",
    route: ROUTERS.SCORES,
  },
  {
    key: 3,
    label: "Xếp hạng",
    route: ROUTERS.RANKINGS.path,
    disableClick: false,
    children: [
      {
        key: 3.1,
        label: "Xếp hạng đơn",
        route: ROUTERS.RANKINGS.children.SINGLES,
      },
      {
        key: 3.2,
        label: "Xếp hạng đôi",
        route: ROUTERS.RANKINGS.children.DOUBLES,
      },
      {
        key: 3.3,
        label: "Cuộc đua đơn",
        route: ROUTERS.RANKINGS.children.RACE_SINGLES,
      },
      {
        key: 3.3,
        label: "Đua đôi",
        route: ROUTERS.RANKINGS.children.RACE_DOUBLES,
      },
    ],
  },
  {
    key: 4,
    label: "Người chơi",
    route: ROUTERS.PLAYERS,
  },
  {
    key: 5,
    label: "Tin tức & Video",
    route: ROUTERS.NEWS_AND_VIDEO.path,
    disableClick: true,
    children: [
      {
        key: 5.1,
        label: "Tin tức",
        route: ROUTERS.NEWS_AND_VIDEO.children.NEWS,
      },
      {
        key: 5.2,
        label: "Video",
        route: ROUTERS.NEWS_AND_VIDEO.children.VIDEO,
      },
    ],
  },
  {
    key: 6,
    label: "Thống kê",
    route: ROUTERS.STATS,
  },
  {
    key: 7,
    label: "WTA",
    route: ROUTERS.WTA,
  },
];
