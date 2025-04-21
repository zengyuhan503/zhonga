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
const tabactive = ref(""); // 选中的tab
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

const tabChange = (id) => {
  tabactive.value = id;
  getList();
};
// 基础变量区域（通用性）
const getList = () => {
  let parmaas = {
    page: pagination.value.page,
    limit: pagination.value.limit,
    cid: tabactive.value,
  };
  listApi(parmaas).then((res) => {
    pagelist.value = res.data.data;
    pagination.value.total = res.data.total;
    pagination.value.last_page = res.data.last_page;
  });
};

// 基础函数区域（通用性）
onMounted(() => {
  let activeMenu = JSON.parse(localStorage.getItem("activeMenu"));
  if (activeMenu) {
    tabactive.value = activeMenu.id;
    getList();
  }
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
            <img :src="item.image" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- Your code here -->
  </div>
  <Pagination></Pagination>
  <Footer></Footer>
</template>

<style lang="less" scoped>
/* Your styles here */
.page-main {
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
      min-height: 600px;

      .page-item {
        width: 33%;
        margin-bottom: 43px;
        cursor: pointer;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        .item {
          background: #fffafa;
          box-shadow: 0px 4px 1px 0px rgba(172, 0, 0, 0.06);
          border-radius: 28px 28px 28px 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 32px;
          img {
            width: 80%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .page-main section {
    width: 100%;
    padding: 0 26px;
    .page-items {
      .page-item {
        width: 100%;
        margin-bottom: 20px;
        div.item {
          .content {
            padding: 10px;
            .title {
              font-size: 1.125rem;
            }
          }
        }
      }
    }
  }
}
</style>
