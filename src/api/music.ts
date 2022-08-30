import { request } from "@/utils/request";
import { IGetMusicParams } from "@/interface/api/music";

export async function getMusic(params:IGetMusicParams) {
    // ?server=netease&type=album&id=80982754
    return request('https://api.i-meto.com/meting/api','get',params)
}