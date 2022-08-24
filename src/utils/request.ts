import axios, {
  AxiosRequestConfig,
  Method,
} from "axios";
import Cookie from "js-cookie";
import { IMethod, IRESULT_CODE } from "@/interface/utils/request";

axios.defaults.timeout = 5000;

// http method
const METHOD: IMethod = {
  GET: "get",
  POST: "post",
};

const RESULT_CODE: IRESULT_CODE = {
  SUCCESS: 0, // 成功(默认值)
  INVALID_ARGUMENT: 1, // 参数不合法
  PERMISSION_DENIED: 2, // 没有权限
  NOT_FOUND: 3, // 数据未找到
  ALREADYEXISTS: 4, // 数据已存在
  UNAUTHENTICATED: 5, // 未认证
  UNKNOWN: 6, // 未知
  UNIMPLEMENTED: 7, // 未实现
  REQUEST_COMMON_ERROR: -99,
};

/**
 * axios请求
 * @param url 请求地址
 * @param method {METHOD} http method
 * @param params 请求参数
 * @returns {Promise<AxiosResponse<T>>}
 */
async function request(
  url: string,
  method: Method,
  params: any,
  config: AxiosRequestConfig = {}
) {
  switch (method) {
    case METHOD.GET:
      return axios.get(url, { params, ...config });
    case METHOD.POST:
      return axios.post(url, params, config);
    default:
      return axios.get(url, { params, ...config });
  }
}

export { METHOD, RESULT_CODE, request };
