const BASE_URL = "/inwe";
const INSERT = "/insert"; //增
const DELETE = "/delete"; //删
const UPDATE = "/update"; //改
const LIST = "/list"; //查

const MUSIC_BASE_URL = `https://api.i-meto.com/meting/api`;
const ESSAY_LIST = `${BASE_URL}/essay/getEssayList`;
const ESSAY_INSERT = `${BASE_URL}/essay/insertEssay`;

const COMMENT_ADD = `${BASE_URL}/comment/addComment`;
const COMMENT_LIST = `${BASE_URL}/comment/getCommentsList`;
const COMMENT_REPLY = `${BASE_URL}/comment/replyComment`;

const PHOTO_LIST = `${BASE_URL}/photo${LIST}`;
const PHOTO_INSERT = `${BASE_URL}/photo${INSERT}`;

export {
  MUSIC_BASE_URL,
  ESSAY_LIST,
  ESSAY_INSERT,
  COMMENT_ADD,
  COMMENT_LIST,
  COMMENT_REPLY,
  PHOTO_LIST,
  PHOTO_INSERT,
};
