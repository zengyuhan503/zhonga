<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Header from "../layout/header.vue";
import Footer from "@/layout/footer.vue";
import { bannerApi, news, category, listApi } from "@/api/list";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

const banner = ref("");
const newsItems = ref({
  top: [],
  list: [],
});
const categorys = ref([]);
const categoryActive = ref(""); // 选中的tab
const categoryActiveList = ref([]); // 选中的tab列表
let newcid, categoryid, sportid;

// 基础函数区域（通用性）
const toNews = () => {
  const cid = newcid;
  router.push({ path: "/news", query: { cid } });
};
const toNewsDetail = (id) => {
  router.push({ path: "/pageDateil", query: { id } });
};
const toCategory = () => {
  const cid = categoryid;
  router.push({ path: "/academic", query: { cid } });
};
const toSpots = () => {
  const cid = sportid;
  router.push({ path: "/scenicspot", query: { cid } });
};

const changeCategory = (id) => {
  categoryActive.value = id;
  getCategoryList(id);
};
const getCategoryList = (id) => {
  let params = {
    page: 1,
    limit: 6,
    cid: id,
  };
  listApi(params).then((res) => {
    console.log(res);
    categoryActiveList.value = res.data.data;
  });
};
const sports = ref([]);
onMounted(() => {
  bannerApi().then((res) => {
    if (res.code == 1) {
      banner.value = res.data[0].image;
    }
  });
  let activeMenu = JSON.parse(localStorage.getItem("activeMenu"));
  newcid = activeMenu.child_list.find((item) => {
    return item.name === "新闻中心";
  })?.id;
  categoryid = activeMenu.child_list.find((item) => {
    return item.name === "中心动态";
  })?.id;
  sportid = activeMenu.child_list.find((item) => {
    return item.name === "热门景点";
  })?.id;
  let params = {
    page: 1,
    limit: 6,
    cid: newcid,
  };
  Promise.all([news.top(newcid), news.no_top_list(params)]).then((res) => {
    if (res[0].code == 1 && res[1].code == 1) {
      newsItems.value.top = res[0].data.data;
      newsItems.value.list = res[1].data.data;
    }
  });
  category(categoryid).then((res) => {
    categorys.value = res.data;
    categoryActive.value = categorys.value[0].id;
    getCategoryList(categoryActive.value);
  });
  listApi({ page: 1, limit: 6, cid: sportid }).then((res) => {
    console.log(res);
    if (res.code == 1) {
      sports.value = res.data.data;
    }
  });
});
</script>

<template>
  <Header />
  <div class="banner">
    <img :src="banner" alt="" />
    <!-- Your code here -->
  </div>
  <div class="page-main">
    <section>
      <div class="news">
        <div class="title">
          <p class="text">新闻<span>资讯</span></p>
          <button @click="toNews">
            查看更多 <img src="../assets/image/link.webp" alt="" />
          </button>
        </div>
        <div class="page-content section1">
          <div class="secton-left">
            <swiper
              :modules="[Navigation, Pagination]"
              :slides-per-view="1"
              :space-between="0"
              pagination
            >
              <swiper-slide v-for="(item, index) in newsItems.top" :key="index">
                <div
                  class="swiper-cover"
                  :style="`background: url(${item.image}) no-repeat center center;`"
                >
                  <img src="../assets/image/swiper.webp" alt="" />
                  <p class="title">{{ item.title }}</p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="section-right">
            <div class="items">
              <div
                class="item"
                v-for="(item, index) in newsItems.list"
                :key="index"
                @click="toNewsDetail(item.id)"
              >
                <div class="title">{{ item.title }}</div>
                <div class="time">{{ item.show_time }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section2">
      <div class="title">
        <div class="text">
          中心<span>动态</span>
          <div class="item">
            <div
              class="tab"
              v-for="item in categorys"
              :key="item.id"
              :class="{ active: item.id == categoryActive }"
              @click="changeCategory(item.id)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <button @click="toCategory()">
          查看更多 <img src="../assets/image/link2.webp" alt="" />
        </button>
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
              <img src="../assets/image/section2.webp" alt="" />
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
    <section class="section3">
      <div class="title">
        <p class="text">热门<span>景点</span></p>
        <button @click="toSpots">
          查看更多 <img src="../assets/image/link.webp" alt="" />
        </button>
      </div>
      <div class="page-content">
        <swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="0"
          pagination
        >
          <swiper-slide
            v-for="(item, index) in sports"
            :key="index"
            @click="router.push({ path: '/pageDateil', query: { id: item.id } })"
          >
            <div
              class="swiper-cover"
              :style="`background: url(${item.image}) no-repeat center center;`"
            >
              <img :src="item.image" alt="" />
              <p class="title">{{ item.title }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
  <Footer />
</template>

<style lang="less" scoped>
/* Your styles here */
.banner {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
.page-main {
  background: url("../assets/image/section3.webp") no-repeat center center;
  background-size: cover;
  background-position: 0;
  padding-bottom: 100px;
}
section {
  width: 1200px;
  margin: auto;
  margin-top: 45px;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      font-family: Source Han Sans CN, Source Han Sans CN;
      font-weight: bold;
      font-size: 2.5rem;
      color: #000000;
      line-height: 47px;
      span {
        color: #e31b1b;
      }
    }
    button {
      width: 107px;
      height: 33px;
      background: #b81c22;
      border-radius: 75px 75px 75px 75px;
      border: none;
      font-family: Source Han Sans CN, Source Han Sans CN;
      font-weight: 400;
      font-size: 0.75rem;
      color: #ffffff;
      line-height: 14px;
      text-align: center;
      img {
        width: 9.38px;
      }
    }
  }
  .page-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &.section1 {
      margin-top: 47px;
    }
    .secton-left {
      width: 48%;
    }
    .swiper-cover {
      background-size: cover;
      border-radius: 25px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        opacity: 0;
      }
      .title {
        position: absolute;
        bottom: 30px;
        font-family: Source Han Sans CN, Source Han Sans CN;
        font-weight: 500;
        font-size: 1.375rem;
        color: #ffffff;
        line-height: 26px;
        text-transform: none;
        left: 0;
        width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 5%;
      }
    }
    .section-right {
      width: 51%;
      padding-left: 60px;
      .items {
        .item {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 0;
          cursor: pointer;

          &::before {
            content: "";
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #000000;
            position: absolute;
            top: 50%;
            left: -30px;
            transform: translateY(-50%);
          }

          .title {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 500;
            font-size: 1.25rem;
            color: #111111;
            line-height: 23px;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          .time {
            font-family: Alibaba PuHuiTi 3, Alibaba PuHuiTi 30;
            font-weight: normal;
            font-size: 1rem;
            color: #999999;
            line-height: 19px;
          }
        }
      }
    }
  }
}
.section2 {
  .title {
    .text {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    button {
      background: #ffffff;
      color: #b8aaa5;
    }
    .item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 50px;
      .tab {
        width: 107px;
        height: 36px;
        border-radius: 100px 100px 100px 100px;
        font-weight: 400;
        font-size: 1rem;
        color: #333333;
        line-height: 19px;
        line-height: 36px;
        text-align: center;
        margin-right: 28px;
        cursor: pointer;
        &.active {
          background: #b81c22;
          color: #ffffff;
        }
        &:hover {
          background: #b81c22;
          color: #ffffff;
        }
      }
    }
  }
  .page-items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 46px;

    .page-item {
      width: 32%;
      margin-bottom: 43px;
      cursor: pointer;
      div.item {
        background: #fff9f9;
        border-radius: 28px;
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
.section3 {
  .page-content {
    margin-top: 47px;
    .new_images {
      background: url("../assets/image/swiper.webp") no-repeat center center;
      background-size: cover;
      border-radius: 25px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        display: block;
        opacity: 0;
      }
    }
  }
}
</style>
<style lang="less">
body .swiper-pagination {
  width: 20% !important;
  right: 10px;
  left: 78% !important;
  bottom: 30px !important;

  .swiper-pagination-bullet {
    width: 20px;
    height: 10px;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 100px 100px 100px 100px;
    &.swiper-pagination-bullet-active {
      width: 10px;
      height: 10px;
      background: #ffffff;
      border-radius: 10px;
    }
  }
}
</style>
