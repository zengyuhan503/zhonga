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
            <img src="../assets/image/partner.webp" alt="" />
          </div>
        </div>
        <div class="page-item">
          <div class="item">
            <img src="../assets/image/partner.webp" alt="" />
          </div>
        </div>
        <div class="page-item">
          <div class="item">
            <img src="../assets/image/partner.webp" alt="" />
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
</style>
