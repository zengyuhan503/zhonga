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
      <div class="page-items">
        <div class="page-item">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/literature.webp" alt="" />
            </div>
            <div class="content">
              <div class="title">《阿拉伯人》 阿文</div>
              <div class="desc">
                所谓“古埃及佛像”，前面陈大漓写过一篇比较精彩的，<继英国发现“吉姆在这里”之后，西方又一伪造被抓现行>，尤其印象深刻的是对于肉髻...
              </div>
            </div>
          </div>
        </div>

        <div class="page-item">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/literature.webp" alt="" />
            </div>
            <div class="content">
              <div class="title">《阿拉伯人》 阿文</div>
              <div class="desc">
                所谓“古埃及佛像”，前面陈大漓写过一篇比较精彩的，<继英国发现“吉姆在这里”之后，西方又一伪造被抓现行>，尤其印象深刻的是对于肉髻...
              </div>
            </div>
          </div>
        </div>

        <div class="page-item">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/literature.webp" alt="" />
            </div>
            <div class="content">
              <div class="title">《阿拉伯人》 阿文</div>
              <div class="desc">
                所谓“古埃及佛像”，前面陈大漓写过一篇比较精彩的，<继英国发现“吉姆在这里”之后，西方又一伪造被抓现行>，尤其印象深刻的是对于肉髻...
              </div>
            </div>
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
  .page-tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tab {
      width: 33%;
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

    .page-items {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 46px; 
      margin-left: -20px;
      margin-right: -20px;

      .page-item {
        width: 33%;
        margin-bottom: 43px;
        cursor: pointer;
        padding-left: 1%;
        padding-right: 10px;
        box-sizing: border-box;

        div.item {
          background: #fff9f9;
          border-radius: 28px 28px 28px 28px;
          padding: 32px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          .cover {
            width: 28%;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .content {
            width: 72%;
            padding-left: 29px;
          }
          .title {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 500;
            font-size: 24px;
            color: #000000;
            line-height: 28px;
            text-align: left;
          }
          .desc {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 400;
            font-size: 14px;
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
