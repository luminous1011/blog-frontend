import { request } from "@/utils/request";
import { METHOD } from "@/utils/request";
import { PHOTO_LIST, PHOTO_INSERT } from "./index";

export async function getPhotoList() {
  return request(PHOTO_LIST, METHOD.GET);
}

export async function insertPhoto(params: any) {
  return request(PHOTO_INSERT, METHOD.POST, params);
}
