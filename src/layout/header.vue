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
const activeMenu = ref({}); // 当前选中的菜单
const isshowMobule = ref(false);

const switchMobileNavs = () => {
  isshowMobule.value = !isshowMobule.value;
};
onMounted(() => {
  // 获取路由参数
  menu().then((res) => {
    if (res.code === 1) {
      menuList.value = res.data;
      menuList.value.forEach((item) => {
        if (item.urlname === route.path) {
          activeMenu.value = item;
          localStorage.setItem("activeMenu", JSON.stringify(item));
          console.log(item);
        }
      });
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
        <div class="menu">
          <img @click="switchMobileNavs" src="../assets/image/menu.png" alt="" />
        </div>
        <div class="navs-list">
          <div
            class="item"
            v-for="(item, index) in menuList"
            :key="index"
            :class="{ active: route.path === item.urlname }"
          >
            <router-link :to="item.urlname">{{ item.name }}</router-link>
          </div>
        </div>
        <div class="mobile-navs" v-show="isshowMobule">
          <div
            class="item"
            v-for="(item, index) in menuList"
            :key="index"
            :class="{ active: route.path === item.urlname }"
          >
            <router-link :to="item.urlname">
              {{ item.name }}
              <img src="../assets/image/link.webp" alt="" />
            </router-link>
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

  .menu {
    display: none;
    img {
      width: 30px;
    }
  }
  .mobile-navs {
    display: none;
  }
}
@media screen and (max-width: 700px) {
  div{
    font-size: 12px;
  }
  .header {
    .nav {
      padding: 0 20px;
      .logo {
        img {
        }
      }
      .navs-list {
        display: none;
      }
      .menu {
        display: block;
        img {
          width: 30px;
        }
      }
      .mobile-navs {
        display: block;
        position: fixed;
        width: 100%;
        height: calc(100vh - 77px);
        top: 77px;
        left: 0;
        background: url(/src/assets/image/home_header_back.webp) no-repeat;
        z-index: 10;
        background-size: cover;
        background-position: 62%;
        .item {
          a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            font-weight: 400;
            padding: 12px 35px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            img {
              width: 12px;
            }
          }
        }
      }
    }
  }
}
/* Your styles here */
</style>
