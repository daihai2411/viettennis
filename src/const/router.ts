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
    path: "/rankings/doubles",
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
  INSTRUCTION: {
    path: "/instruction",
    children: {
      LOGIN_REGISTER: "/page/instruction_login_register",
      PERSONAL_POINT: "/page/instruction_personal_point",
    },
  },
  STATS: "/stats",
  WTA: "/wta",
  PERSONAL_INFO: "/personal-info",
  PERSONAL_INFO_UPDATE: "/personal-info-update",
};
