<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { menu } from "@/api/list";
// Your script here
/**
 * 路由对象
 */
const route = useRoute();
/**
 * 路由实例
 */
const router = useRouter();
const lang = ref("zh"); // 语言选择
const langs = ref([
  {
    name: "中",
    active: true,
  },
  {
    name: "EN",
    active: false,
  },
]);

const changeLang = (index) => {
  langs.value.forEach((item, i) => {
    item.active = i === index;
  });
};
const menuList = ref([]); // 菜单列表
onMounted(() => {
  // 获取路由参数
  menu().then((res) => {
    if (res.code === 1) {
      menuList.value = res.data;
    }
  });
});
</script>

<template>
  <div class="header">
    <div class="navs">
      <div class="nav">
        <div class="logo">
          <router-link to="/"> <img src="../assets/image/logo.png" alt="" /></router-link>
        </div>
        <div class="navs-list">
          <div
            class="item"
            v-for="(item, index) in menuList"
            :key="index"
            :class="{ active: route.path === item.path }"
          >
            <router-link to="/">{{ item.name }}</router-link>
          </div>
          <div class="langs">
            <span
              :class="{ active: item.active }"
              v-for="(item, index) in langs"
              :key="index"
              @click="changeLang(index)"
              >{{ item.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Your code here -->
  </div>
</template>

<style lang="less" scoped>
.header {
  position: relative;
  .navs {
    background: linear-gradient(180deg, #be2d33, #c54146) !important;
    top: 0;
    width: 100%;
    .nav {
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 12px;
      margin: auto;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .logo {
      img {
        width: 222px;
        height: 60px;
      }
    }
    .navs-list {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      top: 2px;
      .item {
        height: 60px;
        line-height: 60px;
        padding: 0 10px;
        margin-left: 24px;
        color: #fff;
        &.active {
          color: #fff;
          border-bottom: 4px solid #ffffff;
        }
        a {
          color: #fff;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
      .langs {
        width: 68px;
        height: 24px;
        border-radius: 100px 100px 100px 100px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        margin-left: 56px;
        span {
          font-size: 0.75rem;
          line-height: 14px;
          color: #fff;
          display: flex;
          width: 50%;
          height: 100%;
          justify-content: center;
          align-items: center;
          border-radius: 100px 100px 100px 100px;
          cursor: pointer;
          &.active {
            color: #e31b1b;
            background: #ffffff;
          }
        }
      }
    }
  }
}
/* Your styles here */
</style>
