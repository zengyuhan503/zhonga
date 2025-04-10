<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PageBanner from "@/layout/page-banner.vue";
import Footer from "@/layout/footer.vue";
import Pagination from "@/components/pagination.vue";
import { bannerApi, original, category, listApi } from "@/api/list";
import moment from "moment";
// Your script here
/**
 * 路由对象
 */
const route = useRoute();
/**
 * 路由实例
 */
const router = useRouter();
const sportid = ref(""); // 选中的tab
const sportsList = ref({
  top: [],
  no_top: [],
});

const items2id = ref(""); // 选中的tab
const items2list = ref({
  top: [],
  no_top: [],
});

// 基础变量区域（通用性）
function splitIntoRowsOf3(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    const chunk = arr.slice(i, i + 3); // 每次取3个元素
    result.push(chunk);
  }
  return result;
}
// 基础函数区域（通用性）
onMounted(() => {
  let activeMenu = JSON.parse(localStorage.getItem("activeMenu"));
  sportid.value = activeMenu.child_list.find((item) => {
    return item.name === "文旅宣传";
  })?.id;

  items2id.value = activeMenu.child_list.find((item) => {
    return item.name === "人物访谈";
  })?.id;

  let params = {
    page: 1,
    limit: 6,
    cid: sportid.value,
  };
  Promise.all([original.top(sportid.value), original.no_top_list(params)]).then((res) => {
    if (res[0].code == 1 && res[1].code == 1) {
      sportsList.value.top = res[0].data.data;
      sportsList.value.top.forEach((item) => {
        item.time = moment(item.show_time).format("YYYY-MM-DD");
      });
      sportsList.value.no_top = res[1].data.data;
      sportsList.value.no_top.forEach((item) => {
        item.time = moment(item.show_time).format("YYYY-MM-DD");
      });
    }
  });

  let params2 = {
    page: 1,
    limit: 6,
    cid: items2id.value,
  };
  Promise.all([original.top(items2id.value), original.no_top_list(params2)]).then(
    (res) => {
      if (res[0].code == 1 && res[1].code == 1) {
        items2list.value.top = res[0].data.data;
        items2list.value.no_top = res[1].data.data;
        items2list.value.no_top = splitIntoRowsOf3(items2list.value.no_top);
        items2list.value.top.forEach((item) => {
          item.time = moment(item.show_time).format("YYYY-MM-DD");
        });
        items2list.value.no_top.forEach((item) => {
          item.time = moment(item.show_time).format("YYYY-MM-DD");
        });
        console.log(items2list.value.no_top);
      }
    }
  );
});
</script>

<template>
  <PageBanner></PageBanner>
  <div class="page-main">
    <!-- Your code here -->
    <section>
      <div class="sports">
        <div class="title">
          <p class="text">文旅<span>宣传</span></p>
          <button>查看更多 <img src="../assets/image/link.webp" alt="" /></button>
        </div>
        <div class="items1">
          <div class="item" v-for="(item, index) in sportsList.top" :key="index">
            <div
              class="cover"
              :style="`background: url(${item.image}) no-repeat center center;`"
            >
              <img src="../assets/image/academic.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">{{ item.time }}</div>
              <div class="title">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
        <div class="item2">
          <div class="item" v-for="(item, index) in sportsList.no_top" :key="index">
            <div class="time">{{ item.time }}</div>
            <div class="title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="interviews">
    <section>
      <div class="title">
        <p class="text">人物<span>访谈</span></p>
        <button>查看更多 <img src="../assets/image/link.webp" alt="" /></button>
      </div>
      <div class="item1" v-if="sportsList.no_top.length > 2">
        <div class="left">
          <div
            class="cover"
            :style="`background: url(${sportsList.no_top[0].image}) no-repeat center center;`"
          >
            <img :src="sportsList.no_top[0].image" alt="" />
          </div>
          <div class="content">
            <div class="title">{{ sportsList.no_top[0].title }}</div>
            <div class="desc">
              {{ sportsList.no_top[0].description }}
            </div>
          </div>
        </div>
        <div class="right">
          <div class="item">
            <div
              class="cover"
              :style="`background: url(${sportsList.no_top[1].image}) no-repeat center center;`"
            >
              <img src="../assets/image/academic1.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">{{ sportsList.no_top[1].time }}</div>
              <div class="title">{{ sportsList.no_top[1].title }}</div>
              <div class="desc">
                {{ sportsList.no_top[1].description }}
              </div>
            </div>
          </div>
          <div class="item">
            <div
              class="cover"
              :style="`background: url(${sportsList.no_top[2].image}) no-repeat `"
            >
              <img src="../assets/image/academic1.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">{{ sportsList.no_top[2].time }}</div>
              <div class="title">{{ sportsList.no_top[2].title }}</div>
              <div class="desc">
                {{ sportsList.no_top[2].description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item2">
        <div class="item" v-for="(item, index) in items2list.no_top" :key="index">
          <div class="node" v-for="node in item" :key="index">
            <div class="title">{{ node.title }}</div>
            <div class="time">{{ node.time }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer></Footer>
</template>

<style lang="less" scoped>
/* Your styles here */
.page-main {
  section {
    width: 1200px;
    margin: auto;
    margin-top: 45px;
  }
  .sports {
    & > .title {
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
    .items1 {
      margin-top: 46px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item {
        width: calc(100% / 3 - 20px);
        border-bottom: 1px solid #e9e9e9;
        .cover {
          width: 100%;
          img {
            width: 100%;
            display: block;
            opacity: 0;
          }
        }
        .content {
          padding: 28px 0;
          .time {
            font-family: Arial, Arial;
            font-weight: 400;
            font-size: 0.875rem;
            color: #ababab;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .title {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 500;
            font-size: 1.5rem;
            color: #111111;
            line-height: 31px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-top: 10px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .item2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 19px;
      flex-wrap: wrap;

      .item {
        width: calc(100% / 3 - 20px);
        display: flex;

        div {
          height: 40px;
        }
        .time {
          width: 100px;
          font-family: Alibaba PuHuiTi 3, Alibaba PuHuiTi 30;
          font-weight: normal;
          font-size: 0.875rem;
          color: #999999;
          line-height: 40px;
          text-align: left;
        }
        .title {
          width: calc(100% - 100px);
          font-family: Source Han Sans CN, Source Han Sans CN;
          font-weight: 500;
          font-size: 1rem;
          color: #111111;
          line-height: 40px;
          text-align: left;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

.interviews {
  background: linear-gradient(#ffffff 7%, #fadacf 73%, #f1a084 100%);
  border-radius: 0px 0px 0px 0px;
  padding-bottom: 99px;
  section {
    width: 1200px;
    margin: auto;
    margin-top: 45px;

    & > .title {
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
    .item1 {
      margin-top: 46px;
      display: flex;
      justify-content: space-between;
      .left {
        width: 50%;
        position: relative;
        border-radius: 25px;
        overflow: hidden;

        .cover {
          width: 100%;
          img {
            width: 100%;
            display: block;
          }
        }
        .content {
          padding: 28px 0;
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          .title {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 500;
            font-size: 1.5rem;
            color: #fff;
            line-height: 28px;
            margin-top: 10px;
            padding-left: 52px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .desc {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 400;
            font-size: 0.875rem;
            color: #a4a4a4;
            line-height: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: 52px;
            margin-top: 10px;
          }
        }
      }
      .right {
        margin-left: 20px;
        width: 60%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .item {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .cover {
            width: 25%;
            background-size: cover;
            border-radius: 25px;
            img {
              width: 100%;
              display: block;
              opacity: 0;
            }
          }
          .content {
            margin-left: 25px;
            width: 65%;
            .time {
              font-family: Arial, Arial;
              font-weight: 400;
              font-size: 14px;
              color: #b6b6b6;
              line-height: 16px;
              text-align: left;
            }
            .title {
              font-family: Source Han Sans CN, Source Han Sans CN;
              font-weight: 500;
              font-size: 24px;
              color: #111111;
              line-height: 31px;
              text-align: left;
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
              line-height: 24px;
              text-align: left;

              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
    .item2 {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      .item {
        width: 32%;
        box-sizing: border-box;
        padding: 20px 29px;
        background: #ffffff;
        border-radius: 18px 18px 18px 18px;
        .node {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 48px;
          .title {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 500;
            font-size: 1rem;
            color: #111111;
            line-height: 19px;
            text-align: left;
            width: calc(100% - 100px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            &::before {
              content: "";
              display: inline-block;
              width: 6px;
              height: 6px;
              background: #000;
              border-radius: 50%;
              margin-right: 10px;
              position: relative;
              top: -2px;
              left: 0px;
            }
          }
          .time {
            width: 100px;
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 400;
            font-size: 0.875rem;
            color: #999999;
            line-height: 16px;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
