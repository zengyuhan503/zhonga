<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
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
  <div class="footer">
    <div class="footer-content">
      <div class="left">
        <div class="qcode">
          <img src="../assets/image/footer-qcode.webp" alt="" />
        </div>
        <div class="text">
          <div>
            <p>{{ $t("footer_address") }}</p>
            <p>{{ $t("footer_tel") }}</p>
            <p>{{ $t("footer_email") }}</p>
          </div>
          <div>
            <p>{{ $t("footer_organizer") }}</p>
            <p>{{ $t("footer_undertaker") }}</p>
          </div>
        </div>
      </div>
      <div class="logo">
        <img src="../assets/image/footer-log.webp" alt="" />
      </div>
    </div>
    <!-- Your code here -->
  </div>
</template>

<style lang="less" scoped>
/* Your styles here */
.footer {
  position: relative;
  background: url("../assets/image/footer.webp") no-repeat center;
  background-size: 100%;
  background-size: 100% 100%;

  .footer-content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 84px 0;
    box-sizing: border-box;
  }
  .qcode {
    width: 75.5px;
    margin-right: 43px;
    img {
      width: 100%;
      display: block;
    }
  }
  .left {
    display: flex;
  }
  .text {
    font-family: Source Han Sans CN, Source Han Sans CN;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    line-height: 19px;
    font-style: normal;
    text-transform: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: calc(265px + 265px + 54px);
    flex-wrap: wrap;
    p {
      margin: 4px 0;
    }
  }
  .logo {
    width: 29%;
    img {
      width: 100%;
      display: block;
    }
  }
}
@media screen and (max-width: 700px) {
  .footer {
    .left {
      display: block;
      text-align: center;
      .qcode {
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }
    .footer-content {
      width: 100%;
      padding: 32px 16px;
      display: block;
      .text {
        width: 100%;
        display: block;
        p {
          word-break: break-all;
        }
      }
    }
    .logo {
      margin-top: 20px;
      width: 50%;
      text-align: center;
      margin: 20px auto 0;
    }
  }
}
</style>
