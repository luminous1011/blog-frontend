


export const GITHUB_CONTACT_URL: string = "https://github.com/luminous1011"
export const GITHUB_CHART_URL: string = "https://ghchart.rshah.org/luminous1011"
export const QQ_CONTACT_URL: string = "http://wpa.qq.com/msgrd?v=3&uin=1980393754&site=qq&menu=yes"
export const MAIL_CONTACT_URL: string = "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=aRkDGhkIBykPBhEECAAFRwoGBA"

export const BLOG_HOME: string = "http://47.93.60.137"
export const BLOG_FAVICON: string = "http://47.93.60.137/favicon.png"

export const ThemeBg = ['bg-red','bg-yellow','bg-blue','bg-green','bg-purple','bg-orange']
export const ThemeIco = ['book','lock','write','msg','website','pic','app','link','art','game']


/**
 * 节流函数（一段时间内只触发一次）
 * @param func 
 * @param delay 
 * @returns 
 */
export const throttle = (func: Function, delay: number) => {
    let prev = Date.now();
    return (...args: any[]) => {
        const context = this; //this指向window
        const now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}
