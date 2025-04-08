<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PageBanner from "@/layout/page-banner.vue";
import Footer from "@/layout/footer.vue";
import Pagination from "@/components/pagination.vue";
import { listApi } from "@/api/list";
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

const news = ref([]); // 新闻数据
const pagination = ref({
  page: 1,
  limit: 10,
  total: 0,
  last_page: 0,
  onchange: (page) => {
    console.log(page);
    pagination.value.page = page;
    getNews();
  },
});
const getNews = async () => {
  let params = {
    page: pagination.value.page,
    limit: pagination.value.limit,
    cid: route.query.cid,
  };
  listApi(params).then((res) => {
    console.log(res);
    news.value = res.data.data;
    pagination.value.total = res.data.total;
    pagination.value.last_page = res.data.last_page;
  });
};
// 基础函数区域（通用性）
onMounted(() => {
  getNews();
});
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
        <span>新闻资讯</span>
      </div>
      <div class="page-items">
        <div class="page-item" v-for="(item, index) in news" :key="index">
          <div class="cover">
            <img :src="item.image" alt="" />
          </div>
          <div class="content">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="desc">
              {{ item.description }}
            </div>
          </div>
          <div class="time">2023 - 10 -11</div>
        </div>
      </div>
    </section>
    <!-- Your code here -->
  </div>
  <Pagination :pagination="pagination"></Pagination>
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

    .page-items {
      .page-item {
        padding: 47px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f1f1f1;
        .cover {
          width: 194px;
          img {
            width: 100%;
            display: block;
          }
        }
        .content {
          width: calc(100% - 194px - 100px - 100px);
          margin: 0 60px 0 45px;
          .title {
            position: relative;
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 500;
            font-size: 24px;
            color: #111111;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 51px;
            line-height: 51px;
            &::before {
              content: " ";
              display: block;
              width: 4px;
              height: 4px;
              background-color: #000;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -20px;
              transform: translateY(-50%);
            }
          }
          .desc {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-top: 20px;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
        .time {
          width: 100px;
          font-family: Arial, Arial;
          font-weight: 400;
          font-size: 16px;
          color: #b6b6b6;
          line-height: 19px;
          height: 51px;
          line-height: 51px;
        }
      }
    }
  }
}
</style>
