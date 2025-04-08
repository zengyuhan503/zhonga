<script setup>
import { ref, reactive, onMounted, computed } from "vue";
// 基础变量区域（通用性）

// 基础函数区域（通用性）
</script>

<template>
  <div class="pagination">
    <!-- Your code here -->
    <div class="pagination-home pagebtn">
      <button>首页</button>
    </div>
    <div class="pagination-per pagebtn">
      <button>上一页</button>
    </div>
    <div class="pagination-items">
      <div class="pagination-item pagebtn active">
        <button>1</button>
      </div>
      <div class="pagination-item pagebtn">
        <button>2</button>
      </div>
      <div class="pagination-item pagebtn">
        <button>...</button>
      </div>
      <div class="pagination-item pagebtn">
        <button>4</button>
      </div>
    </div>
    <div class="pagination-next pagebtn">
      <button>下一页</button>
    </div>
    <div class="pagination-last pagebtn">
      <button>尾页</button>
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
  button {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
  }
}
/* Your styles here */
</style>
