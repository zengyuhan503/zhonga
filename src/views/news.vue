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
    <section class="">
      <div class="page-breadcrumb">
        <router-link to="/">
          <img src="../assets/image/home.webp" alt="" /> 首页</router-link
        >
        <span class="next"> > </span>
        <span>新闻资讯</span>
      </div>
      <div class="page-items">
        <div class="page-item">
          <div class="cover">
            <img src="../assets/image/news.webp" alt="" />
          </div>
          <div class="content">
            <div class="title">
              阿拉伯国家官员研修班 |准确理解中国特色大国外交内涵，感受红色真理力量
            </div>
            <div class="desc">
              政治外交领域：10月25日，约外交大臣萨法迪在伦敦与美国国务卿布林肯会晤时，呼吁向以色列施压，要求以方停止在加沙地带实施“种族清洗”。10月28日，约外交和侨民事务部发言人苏菲安·古达在一份声明中称，约强烈谴责以色列议会当天通过禁止联合国近东巴勒斯坦难民救济和工程处（近东救济工程处）在以色列控制地区开展活动的...
            </div>
          </div>
          <div class="time">2023 - 10 -11</div>
        </div>

        <div class="page-item">
          <div class="cover">
            <img src="../assets/image/news.webp" alt="" />
          </div>
          <div class="content">
            <div class="title">
              阿拉伯国家官员研修班 |准确理解中国特色大国外交内涵，感受红色真理力量
            </div>
            <div class="desc">
              政治外交领域：10月25日，约外交大臣萨法迪在伦敦与美国国务卿布林肯会晤时，呼吁向以色列施压，要求以方停止在加沙地带实施“种族清洗”。10月28日，约外交和侨民事务部发言人苏菲安·古达在一份声明中称，约强烈谴责以色列议会当天通过禁止联合国近东巴勒斯坦难民救济和工程处（近东救济工程处）在以色列控制地区开展活动的...
            </div>
          </div>
          <div class="time">2023 - 10 -11</div>
        </div>

        <div class="page-item">
          <div class="cover">
            <img src="../assets/image/news.webp" alt="" />
          </div>
          <div class="content">
            <div class="title">
              阿拉伯国家官员研修班 |准确理解中国特色大国外交内涵，感受红色真理力量
            </div>
            <div class="desc">
              政治外交领域：10月25日，约外交大臣萨法迪在伦敦与美国国务卿布林肯会晤时，呼吁向以色列施压，要求以方停止在加沙地带实施“种族清洗”。10月28日，约外交和侨民事务部发言人苏菲安·古达在一份声明中称，约强烈谴责以色列议会当天通过禁止联合国近东巴勒斯坦难民救济和工程处（近东救济工程处）在以色列控制地区开展活动的...
            </div>
          </div>
          <div class="time">2023 - 10 -11</div>
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
      .page-item {
        padding: 47px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f1f1f1;
        .cover {
          width: 194px;
          img {
            width: 100%;
            display: block;
          }
        }
        .content {
          width: calc(100% - 194px - 100px - 100px);
          margin: 0 60px 0 45px;
          .title {
            position: relative;
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 500;
            font-size: 24px;
            color: #111111;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 51px;
            line-height: 51px;
            &::before {
              content: " ";
              display: block;
              width: 4px;
              height: 4px;
              background-color: #000;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -20px;
              transform: translateY(-50%);
            }
          }
          .desc {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-top: 20px;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
        .time {
          width: 100px;
          font-family: Arial, Arial;
          font-weight: 400;
          font-size: 16px;
          color: #b6b6b6;
          line-height: 19px;
          height: 51px;
          line-height: 51px;
        }
      }
    }
  }
}
</style>
