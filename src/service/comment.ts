import { request } from "@/utils/request";
import { METHOD } from "@/utils/request";
import { COMMENT_ADD, COMMENT_LIST, COMMENT_REPLY } from "./index";

export async function addComment(params: any) {
  return request(COMMENT_ADD, METHOD.POST, params);
}

export async function getCommentsList(params: any) {
  return request(COMMENT_LIST, METHOD.GET, Object.assign({},params));
}

export async function replyComment(params: any) {
  return request(COMMENT_REPLY, METHOD.POST, params);
}
