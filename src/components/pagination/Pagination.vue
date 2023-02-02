<template>
  <a-pagination
    class="pagination"
    v-model:current="pagination.page"
    :total="pagination.total"
    show-less-items
    :showSizeChanger="false"
  />
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

interface IPagination {
  page: number;
  pageSize: number;
  total: number;
}

const props = defineProps<{
  pagination: IPagination;
}>();
const { pagination } = toRefs(props);
</script>

<style lang="less">
.pagination {
  text-align: center;
  margin: 20px 0;
  a {
    font-family: "Josefin Sans", "PingFang SC", sans-serif;
    // font-weight: 600;
  }
  a:hover {
    color: currentColor;
  }
  .ant-pagination-item-link,
  li {
    border: none;
    background: unset;
  }
  li.ant-pagination-item-active {
    background-color: #ff808e;
    border-radius: 8px;
    a {
      color: #fff;
    }
  }
  .anticon.ant-pagination-item-link-icon {
    color: #ff808e;
  }
  li[aria-disabled="true"] {
    display: none;
  }
  li {
    a {
      height: 32px;
      line-height: 32px;
    }
  }
  //   .ant-pagination-prev,.ant-pagination-next{
  //     font-size: 16px;
  //   }
}
</style>
