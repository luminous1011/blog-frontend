


export const GITHUB_CONTACT_URL: string = "https://github.com/luminous1011"
export const GITHUB_CHART_URL: string = "https://ghchart.rshah.org/luminous1011"
export const QQ_CONTACT_URL: string = "http://wpa.qq.com/msgrd?v=3&uin=1980393754&site=qq&menu=yes"
export const MAIL_CONTACT_URL: string = "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=aRkDGhkIBykPBhEECAAFRwoGBA"

export const BLOG_HOME: string = "http://47.93.60.137"
export const BLOG_FAVICON: string = "http://47.93.60.137/favicon.png"

export const ThemeBg = ['bg-red','bg-yellow','bg-blue','bg-green','bg-purple','bg-orange']
export const ThemeIco = ['book','lock','write','msg','website','pic','app','link','art','game']

interface ISys{
    ie?:string,
    edge?:string,
    firefox?:string,
    opera?:string,
    chrome?:string,
    safari?:string,
}

const WIN_2K="Windows NT 5.0"
const WINDOWS_2K="Windows 2000"
const WIN_XP="Windows NT 5.1"
const WINDOWS_XP="Windows XP"
const WIN_2003="Windows NT 5.2"
const WINDOWS_2003="Windows 2003"
const WIN_VISTA="Windows NT 6.0"
const WINDOWS_VISTA="Windows Vista"
const WIND_7="Windows NT 6.1"
const WINDOWS_7="Windows 7"
const WIND_10="Windows NT 10"
const WINDOWS_10="Windows 10"



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

//获取操作系统类型
export function browserRedirect(){
  var sUserAgent = navigator.userAgent;
  var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
  var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
  if (isMac) return "Mac";
  var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
  if (isUnix) return "Unix";
  var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
  if (isLinux) return "Linux";
  if (isWin) {
      const isWin2K = sUserAgent.indexOf(WIN_2K) > -1 || sUserAgent.indexOf(WINDOWS_2K) > -1;
      if (isWin2K) return WINDOWS_2K;
      const isWinXP = sUserAgent.indexOf(WIN_XP) > -1 || sUserAgent.indexOf(WINDOWS_XP) > -1;
      if (isWinXP) return WINDOWS_XP;
      const isWin2003 = sUserAgent.indexOf(WIN_2003) > -1 || sUserAgent.indexOf(WINDOWS_2003) > -1;
      if (isWin2003) return WINDOWS_2003;
      const isWinVista= sUserAgent.indexOf(WIN_VISTA) > -1 || sUserAgent.indexOf(WINDOWS_VISTA) > -1;
      if (isWinVista) return WINDOWS_VISTA;
      const isWin7 = sUserAgent.indexOf(WIND_7) > -1 || sUserAgent.indexOf(WINDOWS_7) > -1;
      if (isWin7) return WINDOWS_7;
      const isWin10 = sUserAgent.indexOf(WIND_10) > -1 || sUserAgent.indexOf(WINDOWS_10) > -1;
      if (isWin10) return WINDOWS_10;
  }
  return "Unkonwn";
}

//获得浏览器名称
export function getExploreName(){
    const userAgent = navigator.userAgent;
    if(userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1){
      return 'Opera';
    }
    else if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1){
      return 'IE';
    }
    else if(userAgent.indexOf("Edge") > -1){
       return 'Edge';
    }
    else if(userAgent.indexOf("Firefox") > -1){
       return 'Firefox';
    }
    else if(userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1){
      return 'Safari';
    }
    else if(userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1){
       return 'Chrome';
    }
    else{
     return 'Unkonwn';
    }
 }
 export function getExploreVersion(){
    const Sys:ISys = {}; 
    const ua = navigator.userAgent.toLowerCase(); 
    let s; 
    function initVersion(str:string){
        return str.split('.')[0]
    }
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1] : 
    (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1] :
    (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1] : 
    (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1] : 
    (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1] : 
    (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0; 
    
     // 根据关系进行判断
    if (Sys.ie) return (initVersion(Sys.ie)); 
    if (Sys.edge) return (initVersion(Sys.edge));
    if (Sys.firefox) return (initVersion(Sys.firefox)); 
    if (Sys.chrome) return (initVersion(Sys.chrome)); 
    if (Sys.opera) return (initVersion(Sys.opera)); 
    if (Sys.safari) return (initVersion(Sys.safari));
    return 'Unkonwn';
}
