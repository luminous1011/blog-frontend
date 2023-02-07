import { request } from "@/utils/request";
import { METHOD } from "@/utils/request";
import { COMMENT_ADD ,COMMENT_LIST} from "./index";

export async function addComment(params: any) {
  return request(COMMENT_ADD, METHOD.POST, params);
}

export async function getCommentsList(params: any) {
    return request(COMMENT_LIST, METHOD.GET, params);
  }