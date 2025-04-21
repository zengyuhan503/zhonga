<script setup>
import { ref, reactive, onMounted, computed } from "vue";
const props = defineProps({
  pagination: {
    type: Object,
    default: () => ({
      page: 1,
      limit: 10,
      total: 0,
      last_page: 0,
      onchange: (page) => {},
    }),
  },
});

// 基础变量区域（通用性）

// 基础函数区域（通用性）
</script>

<template>
  <div class="pagination" v-show="props.pagination.last_page > 0">
    <!-- Your code here -->
    <div class="pagination-home pagebtn">
      <button>{{ $t("nav_home") }}</button>
    </div>
    <div class="pagination-per pagebtn">
      <button
        :disabled="props.pagination.page === 1"
        @click="props.pagination.onchange(props.pagination.page - 1)"
      >
        {{ $t("pagination_prev") }}
      </button>
    </div>
    <div class="pagination-items">
      <div
        class="pagination-item pagebtn"
        v-for="(item, index) in props.pagination.last_page"
        @click="props.pagination.onchange(index + 1)"
        :class="{ active: props.pagination.page === index + 1 }"
      >
        <button>{{ index + 1 }}</button>
      </div>
    </div>
    <div class="pagination-next pagebtn">
      <button
        :disabled="props.pagination.page === props.pagination.last_page"
        @click="props.pagination.onchange(props.pagination.page - 1)"
      >
        {{ $t("pagination_next") }}
      </button>
    </div>
    <div
      class="pagination-last pagebtn"
      @click="props.pagination.onchange(props.pagination.last_page)"
    >
      <button>{{ $t("pagination_last") }}</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
.pagination-items {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagebtn {
  width: 88px;
  height: 40px;
  border-radius: 2px 2px 2px 2px;
  border: 1px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Source Han Sans CN, Source Han Sans CN;
  font-weight: 400;
  font-size: 16px;
  color: #333333;
  line-height: 20px;
  margin: 0 10px;
  border-radius: 2px 2px 2px 2px;
  overflow: hidden;

  button {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 2px 2px 2px 2px;
  }
  &.active {
    background: #e31b1b;
    border-radius: 2px 2px 2px 2px;
    button {
      border-radius: 2px 2px 2px 2px;
      color: #f1f1f1;
    }
  }
  &:hover {
    background: #e31b1b;
    border-radius: 2px 2px 2px 2px;
    button {
      border-radius: 2px 2px 2px 2px;
      color: #f1f1f1;
    }
  }
}
/* Your styles here */
</style>
