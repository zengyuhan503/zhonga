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
const tabactive = ref("tab1"); // 选中的tab
const tabs = ref([
  { name: "亚非文旅快讯", active: "tab1" },
  { name: "中心文旅活动", active: "tab2" },
]);

// 基础变量区域（通用性）

// 基础函数区域（通用性）
</script>

<template>
  <PageBanner></PageBanner>
  <div class="page-main">
    <div class="page-tab">
      <div
        class="tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: tabactive === tab.active }"
        @click="tabactive = tab.active"
      >
        {{ tab.name }}
      </div>
    </div>
    <section class="">
      <div class="page-title">亚非文旅快讯</div>
      <div class="page-items">
        <div class="page-item">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/section2.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2024 - 09 - 11</div>
              <div class="title">
                阿尔及利亚医生远赴中国求学：要为撒哈拉沙漠众多眼病患者带去光明
              </div>
              <div class="desc">
                10月10日，四川南骏汽车集团与俄罗斯斯玛特汽车公司签订战略合作协议，选定5款南骏商用车产品开启合作，为共建“一带一路”注入新动力...
              </div>
            </div>
          </div>
        </div>

        <div class="page-item">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/section2.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2024 - 09 - 11</div>
              <div class="title">
                阿尔及利亚医生远赴中国求学：要为撒哈拉沙漠众多眼病患者带去光明
              </div>
              <div class="desc">
                10月10日，四川南骏汽车集团与俄罗斯斯玛特汽车公司签订战略合作协议，选定5款南骏商用车产品开启合作，为共建“一带一路”注入新动力...
              </div>
            </div>
          </div>
        </div>

        <div class="page-item">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/section2.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2024 - 09 - 11</div>
              <div class="title">
                阿尔及利亚医生远赴中国求学：要为撒哈拉沙漠众多眼病患者带去光明
              </div>
              <div class="desc">
                10月10日，四川南骏汽车集团与俄罗斯斯玛特汽车公司签订战略合作协议，选定5款南骏商用车产品开启合作，为共建“一带一路”注入新动力...
              </div>
            </div>
          </div>
        </div>

        <div class="page-item">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/section2.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2024 - 09 - 11</div>
              <div class="title">
                阿尔及利亚医生远赴中国求学：要为撒哈拉沙漠众多眼病患者带去光明
              </div>
              <div class="desc">
                10月10日，四川南骏汽车集团与俄罗斯斯玛特汽车公司签订战略合作协议，选定5款南骏商用车产品开启合作，为共建“一带一路”注入新动力...
              </div>
            </div>
          </div>
        </div>

        <div class="page-item">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/section2.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2024 - 09 - 11</div>
              <div class="title">
                阿尔及利亚医生远赴中国求学：要为撒哈拉沙漠众多眼病患者带去光明
              </div>
              <div class="desc">
                10月10日，四川南骏汽车集团与俄罗斯斯玛特汽车公司签订战略合作协议，选定5款南骏商用车产品开启合作，为共建“一带一路”注入新动力...
              </div>
            </div>
          </div>
        </div>

        <div class="page-item">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/section2.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2024 - 09 - 11</div>
              <div class="title">
                阿尔及利亚医生远赴中国求学：要为撒哈拉沙漠众多眼病患者带去光明
              </div>
              <div class="desc">
                10月10日，四川南骏汽车集团与俄罗斯斯玛特汽车公司签订战略合作协议，选定5款南骏商用车产品开启合作，为共建“一带一路”注入新动力...
              </div>
            </div>
          </div>
        </div>

        <div class="page-item">
          <div class="item">
            <div class="cover">
              <img src="../assets/image/section2.webp" alt="" />
            </div>
            <div class="content">
              <div class="time">2024 - 09 - 11</div>
              <div class="title">
                阿尔及利亚医生远赴中国求学：要为撒哈拉沙漠众多眼病患者带去光明
              </div>
              <div class="desc">
                10月10日，四川南骏汽车集团与俄罗斯斯玛特汽车公司签订战略合作协议，选定5款南骏商用车产品开启合作，为共建“一带一路”注入新动力...
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
      width: 50%;
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

    .page-title {
      font-family: Source Han Sans CN, Source Han Sans CN;
      font-weight: bold;
      font-size: 40px;
      color: #000000;
      line-height: 47px;
      text-align: center;
      margin-top: 70px;
    }

    .page-items {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 46px;
      margin-left: -20px;
      margin-right: -20px;

      .page-item {
        width: 25%;
        margin-bottom: 43px;
        cursor: pointer;
        padding-left: 1%;
        padding-right: 10px;
        box-sizing: border-box;

        div.item {
          border-radius: 28px;
          width: 100%;

          .cover {
            width: 100%;
            background: url("../assets/image/section2.webp") no-repeat center center;
            background-size: cover;

            img {
              width: 100%;
              display: block;
              opacity: 0;
            }
          }
          .content {
            padding: 10px 5px;
            .time {
              font-family: Arial, Arial;
              font-weight: 400;
              font-size: 14px;
              color: #ababab;
              line-height: 16px;
            }
            .title {
              font-family: Source Han Sans CN, Source Han Sans CN;
              font-weight: 500;
              font-size: 1.375rem;
              color: #111111;
              line-height: 31px;
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
}
</style>
