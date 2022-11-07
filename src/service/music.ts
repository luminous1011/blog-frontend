import { request } from "@/utils/request";
import { METHOD } from "@/utils/request";
import { MUSIC_BASE_URL } from './index'


export async function getMusic(params: { server: string, type: string, id: string }) {
    // ?server=netease&type=album&id=80982754
    return request(MUSIC_BASE_URL, METHOD.GET, params)
}
