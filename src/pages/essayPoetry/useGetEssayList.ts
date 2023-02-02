import { getEssayList } from "@/service/informalEssay";
import { reactive } from "vue";
interface IEssay {
  infoId: number;
  text: string;
  source: string;
  createTime: number;
  updateTime: number;
  img?: string;
}

interface IPagination {
  page: number;
  pageSize: number;
  total: number;
}

export default function () {
  //列表
  const essayList = reactive<IEssay[]>([]);

  //分页器
  const pagination = reactive<IPagination>({
    page: 1,
    pageSize: 10,
    total: 0,
  });

  //获取列表接口
  async function getEssayLists(page: number) {
    const res = await getEssayList(page, 10);
    const { list = [], pageNum, pageSize, total } = res?.data?.data ?? {};
    pagination.page = pageNum;
    pagination.pageSize = pageSize;
    pagination.total = total;
    essayList.splice(0, essayList.length);
    list.forEach((item: IEssay) => {
      essayList.push(item);
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  return {
    essayList,
    pagination,
    getEssayLists,
  };
}
