const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_MONTH = 2592000000;
const ONE_YEAR = 31104000000;

export function timestampToTime(timestamp: number,temp?:string) {
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
  if(temp==="s"){
    return Y + M + D + h + m.slice(0,m.length-1)
  }
  return Y + M + D + h + m + s;
}

export function commentFormatTime(timestamp: number) {
  const now = new Date().getTime(); //1 675 932 085 812
  // 当前零点的时间
  const zeroDate = now - (now % ONE_DAY);
  const temp = now - timestamp;
  if (temp / ONE_SECOND < 60 && timestamp > zeroDate) {
    return Math.ceil(temp / ONE_SECOND) + " 秒前";
  } else if (temp / ONE_MINUTE < 60 && timestamp > zeroDate) {
    return Math.ceil(temp / ONE_MINUTE) + " 分钟前";
  } else if (temp / ONE_HOUR < 24 && timestamp > zeroDate) {
    return Math.floor(temp / ONE_HOUR) + " 小时前";
  } else if (timestamp > zeroDate - ONE_DAY && timestamp < zeroDate) {
    return "昨天 " + hourMinute(timestamp);
  } else if (temp / ONE_DAY < 7) {
    return Math.floor(temp / ONE_DAY) + " 天前";
  } else {
    return monthDay(timestamp);
  }
}

function monthDay(timestamp: number) {
  const date = new Date(timestamp);

  const M =
    (date.getMonth() + 1 < 10
      ? "" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "月";
  const D = date.getDate() + "日";
  return M + D;
}

function hourMinute(timestamp: number) {
  const date = new Date(timestamp);
  const h = date.getHours() + ":";
  const m = date.getMinutes() + "";
  return h + m;
}
