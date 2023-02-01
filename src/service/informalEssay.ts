import { request } from "@/utils/request";
import { METHOD } from "@/utils/request";
import {ESSAY_LIST,ESSAY_INSERT} from './index'

export async function getEssayList(page:number,pageSize:number) {
    return request(ESSAY_LIST, METHOD.GET,{page,pageSize} )
}

export async function insertEssay(text:string,source:string) {
    return request(ESSAY_INSERT, METHOD.POST, {text,source})
}
