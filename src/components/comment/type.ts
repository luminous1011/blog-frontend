export interface IUser {
  username: string;
  uid: string;
  email: string;
  blogUrl: string;
  avatar: string | null;
}

export interface IComment {
  browser: string;
  browserIcon: string;
  cid: string;
  content: string;
  fromUid: string;
  fromUser: IUser;
  operatingSystem: string;
  path: string;
  toUid: string | null;
  createTime: number;
  replyType: string;
  replyId: string | null;
  replyUser: IUser;
  children: IComment[];
}

export interface IForm {
  name: string;
  comment: string;
  email: string;
  blogUrl: string;
}
