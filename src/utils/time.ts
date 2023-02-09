const ONE_SECOND = 1000;
const ONE_MINUTE = 60000;
const ONE_HOUR = 3600000;
const ONE_DAY = 86400000;
const ONE_MONTH = 2592000000;
const ONE_YEAR = 31104000000;


export function timestampToTime(timestamp: number) {
  const date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + "-";
  const M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  const D = date.getDate() + " ";
  const h = date.getHours() + ":";
  const m = date.getMinutes() + ":";
  const s = date.getSeconds();

  return Y + M + D + h + m + s;
}

export function commentFormatTime(timestamp: number) {
  const now = new Date().getTime() ; //1675932085812

  const temp = now - timestamp;
  if (temp / ONE_SECOND < 60) {
    return Math.ceil(temp / ONE_SECOND) + " 秒前";
  } else if (temp / ONE_MINUTE < 60) {
    return Math.ceil(temp / ONE_MINUTE) + " 分钟前";
  } else if (temp / ONE_HOUR < 24) {
    return Math.ceil(temp / ONE_HOUR) + " 小时前";
  } else if (temp / ONE_HOUR > 24 && temp / ONE_HOUR < 48) {
    return "昨天 " + hourMinute(timestamp);
  } else if (temp / ONE_DAY < 7) {
    return Math.ceil(temp / ONE_DAY) + " 天前";
  } else {
    return timestampToTime(timestamp);
  }
}

function hourMinute(timestamp: number) {
  const date = new Date(timestamp);
  const h = date.getHours() + ":";
  const m = date.getMinutes() + "";
  return h + m;
}
