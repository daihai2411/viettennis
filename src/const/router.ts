export const ROUTERS = {
  HOME: "/",
  API: "/api",
  AUTH: {
    path: "/auth",
    children: {
      REGISTER: "/auth/register",
      LOGIN: "/auth/login",
      FORGET_PASSWORD: "/auth/forget-password",
    },
  },
  TOURNAMENTS: "/tournaments",
  SCORES: "/scores",
  RANKINGS: {
    path: "/rankings/singles",
    children: {
      SINGLES: "/rankings/singles",
      DOUBLES: "/rankings/doubles",
      RACE_SINGLES: "/rankings/race-singles",
      RACE_DOUBLES: "/rankings/race-doubles",
    },
  },
  PLAYERS: "/players",
  NEWS_AND_VIDEO: {
    path: "/news_and_video",
    children: {
      NEWS: "/news",
      VIDEO: "/video",
    },
  },
  STATS: "/stats",
  WTA: "/wta",
};
