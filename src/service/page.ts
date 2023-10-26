import { request } from "@/utils/request";
import { METHOD } from "@/utils/request";
import { PAGE_DATA } from './index'

export async function getPageDataById(path: string) {
    return request(PAGE_DATA, METHOD.GET, { path })
}


