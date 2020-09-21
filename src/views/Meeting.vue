<template>
  <div class="meeting">
    <!-- 顶部导航栏 -->
    <Header></Header>

    <div class="section">
      <div class="section-title">
        <h1>大会介绍</h1>
        <span class="sub-title">CONFERENCE INTRODUCTION</span>
      </div>
      <div class="describe">
        2020年7月30日，中共中央政治局召开会议，会议指出，加快形成以国内大循环为主体、国内国际双循环相互促进的新发展格局。在新格局下，为深入贯彻落实习近平总书记视察山东重要讲话、重要指示批示精神特别是关于科技创新的重要指示精神，完成新旧动能转换任务，践行积极培育
        “十强”产业集群、增强科技创新能力等任务，促进重点产业链高质量发展，巩固青年人作为推动社会创新创业的中坚力量，经山东省委、省政府批准，决定在济南举办首届产业创新大会。
        2020年，在全球疫情和经济困境的大背景下，危机中我们迎来新的大时代，创新、合作、共赢、奋斗是我们变危为机的唯一的出路。
      </div>
    </div>

    <div class="section">
      <div class="section-title">
        <h1>大会流程</h1>
        <span class="sub-title">CONFERENCE AGENDA</span>
      </div>
      <div>
        <div class="topic">
          <h2>大会总论坛</h2>
          <span>8:30-12:15</span>
        </div>
        <div>
          <img src="../assets/555.png" width="100%">
        </div>
      </div>
      <div>
        <div class="topic">
          <h2>大会总论坛</h2>
          <span>8:30-12:15</span>
        </div>
        <div>
          <img src="../assets/555.png" width="100%">
        </div>
      </div>
      <div>
        <div class="topic">
          <h2>企业家沙龙</h2>
          <span>8:30-12:15</span>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-title">
        <h1>论坛活动</h1>
        <span class="sub-title">FORUM ACTIVITIES</span>
      </div>
      <div class="activity-wrapper">
        <div class="item" v-for="item in activityList">
          <img src="@/assets/2222.png" alt="">
          <div class="item-desc">
            同频跨界多元力量 共振产业生态平台
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Meeting',
  components: {
    Header,
  },
  data () {
    return {
      activityList: [
        1, 1, 1, 1, 1, 1, 1, 1
      ]
    }
  }
}
</script>

<style lang="less">
  .meeting {
    .section {
      text-align: left;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 70px;
      padding: 0 50px;

      h1 {
        color: #ffffff;
      }

      .sub-title {
        background-image: -webkit-linear-gradient(left,
        #f68100,
        #ca3372,
        #0089e1);
        font-size: 30px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @media screen and (max-width: 768px) {
        padding: 0 10px;
        h1 {
          font-size: 18px;
        }

        .sub-title {
          font-size: 14px;
        }
      }

    }

    .describe {
      color: #ffffff;
      line-height: 40px;
      margin-top: 40px;
      @media screen and (max-width: 768px) {
        line-height: 20px;
      }
    }

    .topic {
      text-align: center;
      color: #ffffff;
      padding: 10px 0;
      margin: 30px 0;

      h2 {
        margin: 0;
      }

      background-image: linear-gradient(90deg,
      #f68100 0%,
      #ca3372 61%,
      #0089e1 100%);
    }

    .activity-wrapper {
      display: flex;
      flex-wrap: wrap;

      .item {
        box-sizing: border-box;
        width: 25%;
        padding: 7px 5px;
        height: 300px;
        img {
          width: 100%;
          /*height: 206px;*/
        }
        .item-desc {
          height: 100px;
          padding: 10px;
          font-size: 18px;
          color: #141414;
          background-color: #ffffff;
          letter-spacing: 2px;
          font-weight: bold;
        }
      }
    }
  }
</style>
