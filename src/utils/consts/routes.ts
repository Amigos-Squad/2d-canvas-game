export enum ROUTES {
  HOME = '/',
  LOGIN = '/login',
  REGISTRATION = '/registration',

  FORUM = '/forum',
  FORUM_TOPIC = '/forum/topic/:id',
  FORUM_TOPIC_PATH = '/forum/topic/',
  FORUM_FAVORITE = '/forum/favorite',
  FORUM_NEW_TOPIC = '/forum/new',
  FORUM_NEW_POST = '/forum/topic/:id/new',

  LEADERBOARD = '/leaderboard',

  PROFILE = '/profile',
  PROFILE_ACHIEVEMENTS = '/profile/achievements',
  PROFILE_STATISTICS = '/profile/statistics',

  SERVER_ERROR = '/500',
  NOT_FOUND = '*',
}
