import { request } from '@/utils/request';

interface IAxiosInterceptorManager{
    onFulfilled:Function,
    onRejected:Function,
}

export interface IAxiosInterceptors{
    request:IAxiosInterceptorManager[] | [],
    response:IAxiosInterceptorManager[]| [],
}


