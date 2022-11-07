import { request } from "@/utils/request";
import { METHOD } from "@/utils/request";
import {HELLO_SPRING_BOOT} from './index'

export async function getConnect() {
    return request(HELLO_SPRING_BOOT, METHOD.GET, )
}
