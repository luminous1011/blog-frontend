import { RESULT_CODE,  } from '@/utils/request'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import {MUSIC_BASE_URL} from '@/service/index'
// import {
//   // AUTH_API_04,
//   FEEDBACK_NEW,
//   FEEDBACK_SEARCH,
//   FEEDBACK_DETAIL,
// } from '@/services/api'
// import { logout } from '@/services/user'
import Cookie from 'js-cookie'


const DEFAULT_ERR_MESSAGE = '请求失败'
const FORBIDDEN_ERR_MESSAGE = '请求被拒绝'
const DENIED_ERR_MESSAGE = '无此权限'

export function getResResult(res:AxiosResponse ) {
  const errorCode = RESULT_CODE.REQUEST_COMMON_ERROR // -99
  const errMessage = DEFAULT_ERR_MESSAGE

  const configUrl:string =res.config.url||''
  if(configUrl.includes(MUSIC_BASE_URL)){
    return res
  }
  if (res) {
    let { data: comData } = res
    if (!comData) {
      comData = {}
    }
    let { error } = comData
    if (!error) {
      error = {}
    }
    const { code = errorCode, message = errMessage } = error
    return Object.assign({}, res, { data: { ...res.data, error: { code, message } } })
  }
  return { data: { error: { errorCode, errMessage } } }
}
// 401拦截
// const resp401 = {
//   /**
//    * 响应数据之前做点什么
//    * @param response 响应对象
//    * @param options 应用配置 包含: {router, i18n, store, message}
//    * @returns {*}
//    */
//   onFulfilled(response = {}, options) {
//     const { message } = options
//     if (response.status === 401) {
//       message.error('无此权限')
//     }
//     return response
//   },
//   /**
//    * 响应出错时执行
//    * @param error 错误对象
//    * @param options 应用配置 包含: {router, i18n, store, message}
//    * @returns {Promise<never>}
//    */
//   onRejected(error, options) {
//     const { message } = options
//     const { response = {} } = error
//     if (response.status === 401) {
//       message.error('无此权限')
//     } else if (response.status === 403) {
//       message.error('请求被拒绝')
//     }
//     return Promise.reject(error)
//   },
// }

const reqCommon = {
  /**
   * 发送请求之前做些什么
   * @param config axios config
   * @param options 应用配置 包含: {router, i18n, store, message}
   * @returns {*}
   */
  onFulfilled(config:AxiosRequestConfig) {
    let fakeToken = 'fakeToken'
    // if (xsrfHeaderName && Cookie.get(xsrfHeaderName)) {
    //   fakeToken = Cookie.get(xsrfHeaderName)
    // }
    const { headers } = config
    // if (headers) {
    //   headers[xsrfHeaderName] = headers[xsrfHeaderName] ? headers[xsrfHeaderName] : fakeToken
    // } else {
    //   config.headers = { [xsrfHeaderName]: fakeToken }
    // }
    return config
  },
  /**
   * 请求出错时做点什么
   * @param error 错误对象
   * @param options 应用配置 包含: {router, i18n, store, message}
   * @returns {Promise<never>}
   */
  onRejected(error:AxiosError, options:any) {
    const { message } = options
    message.error(error.message)
    return Promise.reject(error)
  },
}

const resCommon = {
  onFulfilled(response :AxiosResponse, options:any) {
    
    const adjustResponse = getResResult(response)
    const { data } = adjustResponse
    // const { message } = options
    // if (response.status === 401) {
    //   message.error(DENIED_ERR_MESSAGE)
    // } else if (response.status === 403) {
    //   message.error(FORBIDDEN_ERR_MESSAGE)
    // }
    // if (data.error.code === RESULT_CODE.SUCCESS) {
    //   return adjustResponse
    // } else if (data.error.code === RESULT_CODE.UNAUTHENTICATED) {
    //   const { store, router } = options
    //   logout()
    //   store.commit('account/setUser', {})
    //   // const { responseURL = '' } = request
    //   // options.router.history.current.fullPath
    //   const { fullPath = '', path = '' } = options.router.history.current
    //   if (path.includes('feedback') || path.includes('agreement')) {
    //     router.push({ path: '/login', query: { redirect: fullPath } })
    //   }
    // }
    return adjustResponse
  },
  onRejected(error:AxiosError, options:any) {
    // const { message } = options
    const { response = {} } = error
    // if (response.status === 401) {
    //   message.error(DENIED_ERR_MESSAGE)
    // } else if (response.status === 403) {
    //   message.error(FORBIDDEN_ERR_MESSAGE)
    // } else {
    //   console.error(DEFAULT_ERR_MESSAGE)
    // }
    // return Promise.resolve(getResResult(response))
    // return Promise.reject(error)
    return 'w2222'
  },
}

export default {
  request: [], // 请求拦截
  // request: [reqCommon], // 请求拦截
  response: [resCommon], // 响应拦截
}
