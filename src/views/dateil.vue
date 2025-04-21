<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PageBanner from "@/layout/page-banner.vue";
import Footer from "@/layout/footer.vue";
import Pagination from "@/components/pagination.vue";
import { pagedetailApi, up_down_list } from "@/api/list";
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
const detail = ref({}); // 新闻数据
const upandDown = ref({}); // 上下篇数据
const getDetail = (id) => {
  pagedetailApi(id).then((res) => {
    console.log(res);
    detail.value = res.data;
  });
};
const getUpAndDown = (id) => {
  up_down_list(id).then((res) => {
    console.log(res);
    upandDown.value = res.data;
  });
};
const toUp = () => {
  let id = upandDown.value.up_list.id;
  getUpAndDown(id);
};
const toDown = () => {
  let id = upandDown.value.down_list.id;
  getUpAndDown(id);
};
onMounted(() => {
  let id = route.query.id;
  getDetail(id);
  getUpAndDown(id);
});
</script>

<template>
  <PageBanner></PageBanner>
  <div class="page-main">
    <section class="">
      <div class="page-breadcrumb">
        <router-link to="/">
          <img src="../assets/image/home.webp" alt="" /> {{ $t("nav_home") }}</router-link
        >
        <span class="next"> > </span>
        <span>{{ $t("details") }}</span>
      </div>
      <div class="page-detail">
        <p class="title">{{ detail.title }}</p>
        <p class="time">{{ detail.create_time }}</p>
        <img :src="detail.image" alt="" />
        <div class="content" v-html="detail.content"></div>
      </div>
      <div class="page-orther">
        <div class="per" @click="toUp">
          <span>{{ $t("previous_posts") }}</span>
        </div>
        <div class="tohome" @click="router.push('/')">{{ $t("back_home") }}</div>
        <div class="next" @click="toDown">
          <span>{{ $t("next_posts") }}</span>
        </div>
      </div>
    </section>
    <!-- Your code here -->
  </div>
  <Footer></Footer>
</template>
<style>
#app {
}
</style>
<style lang="less" scoped>
/* Your styles here */
.page-main {
  background: linear-gradient(179deg, #f1f1f1 0%, #f3ecea 57%, #fadacf 100%);
  border-radius: 0px 0px 0px 0px;
  padding: 47px 0 100px 0;
  section {
    width: 1200px;
    background: #ffffff;
    border-radius: 48px 48px 48px 48px;
    padding: 0 123px;
    box-sizing: border-box;
    margin: 0 auto;

    .page-breadcrumb {
      padding: 47px 0;
      font-family: Source Han Sans CN, Source Han Sans CN;
      font-weight: 400;
      font-size: 14px;
      color: #333333;
      line-height: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #ebebeb;
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
    .page-detail {
      padding: 50px 0;
      border-bottom: 1px solid #ebebeb;
      .title {
        font-family: Source Han Sans CN, Source Han Sans CN;
        font-weight: 500;
        font-size: 32px;
        color: #000000;
        line-height: 30px;
        text-align: center;
      }
      .time {
        font-family: Source Han Sans CN, Source Han Sans CN;
        font-weight: 400;
        font-size: 16px;
        color: #666666;
        line-height: 19px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 50px;
      }
      & > img {
        max-width: 100%;
        display: block;
        margin: 0 auto;
      }
      .content {
        margin-top: 90px;
      }
    }
    .page-orther {
      padding: 48px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > div {
        cursor: pointer;
      }

      .per,
      .next {
        font-family: Source Han Sans CN, Source Han Sans CN;
        font-weight: 400;
        font-size: 16px;
        color: #999999;
        line-height: 20px;
        span {
          color: #333333;
        }
      }
      .tohome {
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
      }
    }
  }
}
</style>
