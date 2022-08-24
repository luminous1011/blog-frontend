export interface IMethod{
    GET:string,
    POST:string,
}

export interface IRESULT_CODE{
    SUCCESS: number, // 成功(默认值)
    INVALID_ARGUMENT: number, // 参数不合法
    PERMISSION_DENIED: number, // 没有权限
    NOT_FOUND: number, // 数据未找到
    ALREADYEXISTS: number, // 数据已存在
    UNAUTHENTICATED: number, // 未认证
    UNKNOWN: number, // 未知
    UNIMPLEMENTED: number, // 未实现
    REQUEST_COMMON_ERROR: number,
}