<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PageBanner from "@/layout/page-banner.vue";
import Footer from "@/layout/footer.vue";
import Pagination from "@/components/pagination.vue";
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

// 基础函数区域（通用性）
</script>

<template>
  <PageBanner></PageBanner>
  <div class="page-main">
    <!-- Your code here -->
    <section>
      <div class="sports">
        <div class="title">
          <p class="text">新闻<span>资讯</span></p>
          <button>查看更多 <img src="../assets/image/link.webp" alt="" /></button>
        </div>
        <div class="items1">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/academic.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2023 - 10 -11</div>
              <div class="title">友城相册丨马拉喀什市</div>
            </div>
          </div>
          <div class="item">
            <div class="cover">
              <img src="../assets/image/academic.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2023 - 10 -11</div>
              <div class="title">友城相册丨马拉喀什市</div>
            </div>
          </div>
          <div class="item">
            <div class="cover">
              <img src="../assets/image/academic.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2023 - 10 -11</div>
              <div class="title">友城相册丨马拉喀什市</div>
            </div>
          </div>
        </div>
        <div class="item2">
          <div class="item">
            <div class="time">2023 - 10 -11</div>
            <div class="title">友城相册丨马拉喀什市</div>
          </div>

          <div class="item">
            <div class="time">2023 - 10 -11</div>
            <div class="title">友城相册丨马拉喀什市</div>
          </div>

          <div class="item">
            <div class="time">2023 - 10 -11</div>
            <div class="title">友城相册丨马拉喀什市</div>
          </div>
          <div class="item">
            <div class="time">2023 - 10 -11</div>
            <div class="title">友城相册丨马拉喀什市</div>
          </div>

          <div class="item">
            <div class="time">2023 - 10 -11</div>
            <div class="title">友城相册丨马拉喀什市</div>
          </div>

          <div class="item">
            <div class="time">2023 - 10 -11</div>
            <div class="title">友城相册丨马拉喀什市</div>
          </div>
          <div class="item">
            <div class="time">2023 - 10 -11</div>
            <div class="title">友城相册丨马拉喀什市</div>
          </div>

          <div class="item">
            <div class="time">2023 - 10 -11</div>
            <div class="title">友城相册丨马拉喀什市</div>
          </div>

          <div class="item">
            <div class="time">2023 - 10 -11</div>
            <div class="title">友城相册丨马拉喀什市</div>
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
      <div class="item1">
        <div class="left">
          <div class="cover">
            <img src="../assets/image/academic2.webp" alt="" />
          </div>
          <div class="content">
            <div class="title">友城相册丨马拉喀什市</div>
            <div class="desc">
              常大使表示，在中沙两国领导人共同关心和战略引领下，双边各领域友好合作发展迅速...
            </div>
          </div>
        </div>
        <div class="right">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/academic1.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2023 - 10 -11</div>
              <div class="title">友城相册丨马拉喀什市</div>
              <div class="desc">
                常大使表示，在中沙两国领导人共同关心和战略引领下，双边各领域友好合作发展迅速...
              </div>
            </div>
          </div>
          <div class="item">
            <div class="cover">
              <img src="../assets/image/academic1.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2023 - 10 -11</div>
              <div class="title">友城相册丨马拉喀什市</div>
              <div class="desc">
                常大使表示，在中沙两国领导人共同关心和战略引领下，双边各领域友好合作发展迅速...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item2">
        <div class="item">
          <div class="node">
            <div class="title">埃及中东社专访驻埃及大使廖力强</div>
            <div class="time">2023 - 10 -11</div>
          </div>
          <div class="node">
            <div class="title">埃及中东社专访驻埃及大使廖力强</div>
            <div class="time">2023 - 10 -11</div>
          </div>
          <div class="node">
            <div class="title">埃及中东社专访驻埃及大使廖力强</div>
            <div class="time">2023 - 10 -11</div>
          </div>
        </div>
        <div class="item">
          <div class="node">
            <div class="title">埃及中东社专访驻埃及大使廖力强</div>
            <div class="time">2023 - 10 -11</div>
          </div>
          <div class="node">
            <div class="title">埃及中东社专访驻埃及大使廖力强</div>
            <div class="time">2023 - 10 -11</div>
          </div>
          <div class="node">
            <div class="title">埃及中东社专访驻埃及大使廖力强</div>
            <div class="time">2023 - 10 -11</div>
          </div>
        </div>
        <div class="item">
          <div class="node">
            <div class="title">埃及中东社专访驻埃及大使廖力强</div>
            <div class="time">2023 - 10 -11</div>
          </div>
          <div class="node">
            <div class="title">埃及中东社专访驻埃及大使廖力强</div>
            <div class="time">2023 - 10 -11</div>
          </div>
          <div class="node">
            <div class="title">埃及中东社专访驻埃及大使廖力强</div>
            <div class="time">2023 - 10 -11</div>
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
            width: 30%;
            img {
              width: 100%;
              display: block;
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
            }
            .desc {
              font-family: Source Han Sans CN, Source Han Sans CN;
              font-weight: 400;
              font-size: 14px;
              color: #999999;
              line-height: 24px;
              text-align: left;
            }
          }
        }
      }
    }
    .item2 {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
              left: -5px;
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
