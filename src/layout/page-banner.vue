<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { menu } from "@/api/list";
import { useI18n } from "vue-i18n";
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
const { t, locale } = useI18n(); // 国际化
const langs = ref([
  {
    name: "中",
    lang: "zh",
    active: false,
  },
  {
    name: "AR",
    lang: "ar",
    active: false,
  },
]);
lang.value = locale.value;

const menuList = ref([]); // 菜单列表
const activeMenu = ref({}); // 当前选中的菜单
const isshowMobule = ref(false);
const getMenu = () => {
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
};
const switchMobileNavs = () => {
  isshowMobule.value = !isshowMobule.value;
};

const changeLang = (index) => {
  langs.value.forEach((item, i) => {
    item.active = i === index;
  });
  localStorage.setItem("zhong-lang", langs.value[index].lang);
  locale.value = langs.value[index].lang;
  router.push("/");
  getMenu();
};

onMounted(() => {
  // 获取路由参数
  langs.value.forEach((item, i) => {
    if (item.lang === localStorage.getItem("zhong-lang")) {
      item.active = true;
    }
  });
  getMenu();
});
</script>

<template>
  <div class="section-header">
    <div class="header">
      <div class="navs">
        <div class="nav">
          <div class="logo">
            <router-link to="/">
              <img src="../assets/image/logo.png" alt=""
            /></router-link>
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

    <img src="../assets/image/header-back2.webp" alt="" />
    <!-- Your code here -->
    <div class="banner-text">
      <p>{{ route.name }}</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* Your styles here */
.section-header {
  position: relative;
  & > img {
    width: 100%;
    display: block;
  }
  .banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    p {
      font-family: Source Han Sans CN, Source Han Sans CN;
      font-weight: bold;
      font-size: 4rem;
      color: #ffffff;
      line-height: 75px;
    }
  }
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .navs {
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
  div {
    font-size: 12px;
  }
  .section-header {
    & > img {
      height: 300px;
    }
    .banner-text {
      p {
        font-size: 2rem;
      }
    }
  }
  .header {
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
</style>
