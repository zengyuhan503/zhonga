<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PageBanner from "@/layout/page-banner.vue";
import Footer from "@/layout/footer.vue";
import Pagination from "@/components/pagination.vue";
import { pagedetailApi } from "@/api/list";
// Your script here
/**
 * 路由对象
 */
const route = useRoute();
/**
 * 路由实例
 */
const router = useRouter();
// 基础变量区域（通用性）
// 基础函数区域（通用性）
const getDetail = () => {
  let id = route.query.id;
  pagedetailApi(id).then((res) => {
    console.log(res);
    detail.value = res.data;
  });
};
onMounted(() => {});
</script>

<template>
  <PageBanner></PageBanner>
  <div class="page-main">
    <section class="">
      <div class="page-breadcrumb">
        <router-link to="/">
          <img src="../assets/image/home.webp" alt="" /> 首页</router-link
        >
        <span class="next"> > </span>
        <span>详情</span>
      </div>
      
    </section>
    <!-- Your code here -->
  </div>
  <Footer></Footer>
</template>

<style lang="less" scoped>
/* Your styles here */
.page-main {
  section {
    width: 1200px;
    margin: 0 auto;
    .page-breadcrumb {
      margin: 47px 0;
      font-family: Source Han Sans CN, Source Han Sans CN;
      font-weight: 400;
      font-size: 14px;
      color: #333333;
      line-height: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 18px;
        margin-right: 5px;
      }
      .next {
        margin: 0 10px;
      }
    }
  }
}
</style>
