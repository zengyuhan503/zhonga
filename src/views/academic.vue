<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PageBanner from "@/layout/page-banner.vue";
import Footer from "@/layout/footer.vue";
import Pagination from "@/components/pagination.vue";
import { category, listApi } from "@/api/list";

// Your script here
/**
 * 路由对象
 */
const route = useRoute();
/**
 * 路由实例
 */
const router = useRouter();
let categoryid;
const categorys = ref([]);
const categoryActive = ref(""); // 选中的tab
const categoryActiveList = ref([]); // 选中的tab列表

const pagination = ref({
  page: 1,
  limit: 6,
  total: 0,
  last_page: 0,
  onchange: (page) => {
    console.log(page);
    pagination.value.page = page;
    getCategoryList();
  },
});
// 基础变量区域（通用性）

const changeCategory = (id) => {
  categoryActive.value = id;
  getCategoryList();
};
const getCategoryList = () => {
  let params = {
    page: pagination.value.page,
    limit: pagination.value.limit,
    cid: categoryActive.value,
  };
  listApi(params).then((res) => {
    console.log(res);
    categoryActiveList.value = res.data.data;
    pagination.value.total = res.data.total;
    pagination.value.last_page = res.data.last_page;
  });
};

// 基础函数区域（通用性）
onMounted(() => {
  // 获取路由参数

  let activeMenu = JSON.parse(localStorage.getItem("activeMenu"));

  categoryid = activeMenu.child_list.find((item) => {
    return item.name === "中心动态";
  })?.id;

  category(categoryid).then((res) => {
    categorys.value = res.data;
    categoryActive.value = categorys.value[0].id;
    getCategoryList();
  });
});
</script>

<template>
  <PageBanner></PageBanner>
  <div class="page-main">
    <div class="page-tab">
      <div
        class="tab"
        v-for="(tab, index) in categorys"
        :key="index"
        :class="{ active: categoryActive === tab.id }"
        @click="changeCategory(tab.id)"
      >
        {{ tab.name }}
      </div>
    </div>
    <section class="">
      <div class="page-breadcrumb">
        <router-link to="/">
          <img src="../assets/image/home.webp" alt="" /> 首页</router-link
        >
        <span class="next"> > </span>
        <span>中心动态</span>
        <span class="next"> > </span>
        <span>学术内容</span>
      </div>
      <div class="page-items">
        <div
          class="page-item"
          v-for="(item, index) in categoryActiveList"
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
              <div class="time">{{ item.show_time }}</div>
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
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 46px;
      margin-left: -20px;
      margin-right: -20px;
      min-height: 400px;

      .page-item {
        width: 25%;
        margin-bottom: 43px;
        cursor: pointer;
        padding-left: 1%;
        padding-right: 10px;
        box-sizing: border-box;

        div.item {
          background: #fff9f9;
          border-radius: 28px;
          width: 100%;
          overflow: hidden;

          .cover {
            width: 100%;

            background-size: cover;

            img {
              width: 100%;
              display: block;
              opacity: 0;
            }
          }
          .content {
            padding: 28px;
            .time {
              font-family: Arial, Arial;
              font-weight: 400;
              font-size: 14px;
              color: #e31b1b;
              line-height: 16px;
            }
            .title {
              font-family: Source Han Sans CN, Source Han Sans CN;
              font-weight: 500;
              font-size: 24px;
              color: #111111;
              line-height: 31px;
              margin: 10px 0;
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .desc {
              font-family: Source Han Sans CN, Source Han Sans CN;
              font-weight: 400;
              font-size: 14px;
              color: #999999;
              line-height: 16px;

              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }

          &:hover {
            background: linear-gradient(179deg, #de4d20 0%, #b81c22 100%);
            .content {
              .time {
                color: #ffffff;
              }
              .title {
                color: #ffffff;
              }
              .desc {
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
