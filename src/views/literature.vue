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
let cid = null;
const pagelist = ref([]);
const pagination = ref({
  page: 1,
  limit: 12,
  total: 0,
  last_page: 0,
  onchange: (page) => {
    pagination.value.page = page;
    getList();
  },
});

// 基础变量区域（通用性）
const getList = () => {
  let parmaas = {
    page: pagination.value.page,
    limit: pagination.value.limit,
    cid: cid,
  };
  listApi(parmaas).then((res) => {
    console.log(res);
    pagelist.value = res.data.data;
    pagination.value.total = res.data.total;
    pagination.value.last_page = res.data.last_page;
  });
};
onMounted(() => {
  // 获取路由参数
  let activeMenu = JSON.parse(localStorage.getItem("activeMenu"));
  console.log(activeMenu);
  cid = activeMenu.id;
  getList();
});
</script>

<template>
  <PageBanner></PageBanner>
  <div class="page-main">
    <section class="">
      <div class="page-items">
        <div
          class="page-item"
          v-for="(item, index) in pagelist"
          :key="index"
          @click="router.push({ path: '/pageDateil', query: { id: item.id } })"
        >
          <div class="item">
            <div
              class="cover"
              :style="`background: url(${item.image}) no-repeat center center;`"
            >
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
          </div>
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
  .page-tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tab {
      width: 33%;
      height: 80px;
      font-family: Source Han Sans CN, Source Han Sans CN;
      font-weight: 400;
      font-size: 16px;
      color: #333333;
      line-height: 19px;
      border-bottom: 4px solid #f1f1f1;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &.active {
        background: linear-gradient(96deg, #d5411f 0%, #b81c22 100%);
        border-radius: 0px 0px 0px 0px;
        border-bottom-color: #b81c22;
        color: #fff;
      }
    }
  }
  section {
    width: 1200px;
    margin: 0 auto;

    .page-items {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 46px;
      margin-left: -20px;
      margin-right: -20px;
      min-height: 400px;

      .page-item {
        width: 33%;
        margin-bottom: 43px;
        cursor: pointer;
        padding-left: 1%;
        padding-right: 10px;
        box-sizing: border-box;

        div.item {
          background: #fff9f9;
          border-radius: 28px 28px 28px 28px;
          padding: 32px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          .cover {
            width: 28%;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .content {
            width: 72%;
            padding-left: 29px;
          }
          .title {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 500;
            font-size: 24px;
            color: #000000;
            line-height: 28px;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .desc {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
            line-height: 16px;
            text-align: left;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}
</style>
