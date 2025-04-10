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
const tabactive = ref("tab1"); // 选中的tab
const child_list = ref([]);

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

const tabChange = (id) => {
  tabactive.value = id;
  getList();
};

const getList = () => {
  let parmaas = {
    page: pagination.value.page,
    limit: pagination.value.limit,
    cid: tabactive.value,
  };
  listApi(parmaas).then((res) => {
    console.log(res);
    pagelist.value = res.data.data;
    pagination.value.total = res.data.total;
    pagination.value.last_page = res.data.last_page;
  });
};

// 基础函数区域（通用性）

onMounted(() => {
  let activeMenu = JSON.parse(localStorage.getItem("activeMenu"));
  console.log(activeMenu);
  if (activeMenu) {
    child_list.value = activeMenu.child_list;
    tabactive.value = activeMenu.child_list[0].id;
    getList();
  }
});
</script>

<template>
  <PageBanner></PageBanner>
  <div class="page-main">
    <div class="page-tab">
      <div
        class="tab"
        v-for="(tab, index) in child_list"
        :key="index"
        :class="{ active: tabactive === tab.id }"
        @click="tabChange(tab.id)"
      >
        {{ tab.name }}
      </div>
    </div>
    <section class="">
      <div class="page-title">亚非文旅快讯</div>
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
              <img src="../assets/image/academic2.webp" alt="" />
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
      width: 50%;
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

    .page-title {
      font-family: Source Han Sans CN, Source Han Sans CN;
      font-weight: bold;
      font-size: 40px;
      color: #000000;
      line-height: 47px;
      text-align: center;
      margin-top: 70px;
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
        margin-bottom: 13px;
        cursor: pointer;
        padding-left: 1%;
        padding-right: 10px;
        box-sizing: border-box;
        min-height: 400px;

        div.item {
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
            padding: 20px;
            .time {
              font-family: Arial, Arial;
              font-weight: 400;
              font-size: 14px;
              color: #ababab;
              line-height: 16px;
            }
            .title {
              font-family: Source Han Sans CN, Source Han Sans CN;
              font-weight: 500;
              font-size: 1.375rem;
              color: #111111;
              line-height: 31px;
              margin: 10px 0;
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 1;
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
