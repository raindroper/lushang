<template>
  <div class="news-detail">
    <Header></Header>
    <div class="section">
      <h1 class="news-title">{{newsDetail.title}}</h1>
      <div class="news-date">{{newsDetail.date}}</div>
      <div class="news-pic">
        <img :src="newsDetail.pic" alt="">
      </div>
      <div class="news-content">
        <p class="news-paragraph" v-for="(item, index) in newsDetail.content" :key="index">
          {{item}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

const newsDetail = {
  title: '新闻标题',
  date: '2020.10.20',
  pic: require('../assets/banner.png'),
  content: [
    '段落一段落一段落一段落一段落一段落一段落一段落一段落一',
    '段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一',
    '段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一',
  ]
}
export default {
  name: 'NewsDetail',
  components: {
    Header,
  },
  data () {
    return {
      newsDetail
    }
  }
}
</script>

<style scoped lang="less">
  .section {
    text-align: left;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    padding: 0 50px;

    h1 {
      color: #ffffff;
      font-weight: bold !important;
      /*font-size: 21px !important;*/
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

  .news-detail {
    .news-title {
      text-align: center;
      color: #ffffff;
      margin-bottom: 12px;
      font-size: 32px;
      @media screen and (max-width: 768px) {
        font-size: 22px;
      }
    }

    .news-date {
      text-align: center;
      color: #ffffff;
      margin-bottom: 36px;
    }

    .news-pic {
      width: 100%;
      margin-bottom: 36px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .news-content {
      color: #cccccc;
      margin-bottom: 100px;
      .news-paragraph {
        line-height: 2;
      }
    }
  }
</style>
