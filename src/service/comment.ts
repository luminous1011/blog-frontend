import { request } from "@/utils/request";
import { METHOD } from "@/utils/request";
import { COMMENT_ADD } from "./index";

export async function addComment(params: any) {
  return request(COMMENT_ADD, METHOD.POST, params);
}
