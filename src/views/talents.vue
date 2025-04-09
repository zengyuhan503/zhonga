<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PageBanner from "@/layout/page-banner.vue";
import Footer from "@/layout/footer.vue";
import { pagecontent } from "@/api/list";
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

const pagelist = ref({});
// 基础变量区域（通用性）

const tabChange = (id) => {
  tabactive.value = id;
  getList();
};

const getList = () => {
  pagecontent(tabactive.value).then((res) => {
    console.log(res);
    pagelist.value = res.data;
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
      <div v-html="pagelist.content"></div>
    </section>
    <!-- Your code here -->
  </div>
  <Footer></Footer>
</template>

<style lang="less" scoped>
/* Your styles here */
.page-main {
  background: linear-gradient(#ffffff 7%, #fadacf 73%, #f1a084 100%);
  border-radius: 0px 0px 0px 0px;
  padding-bottom: 99px;

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
    margin: 100px auto;
    & > div {
    }
  }
}
</style>
