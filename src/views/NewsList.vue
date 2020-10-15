<template>
  <div class="news-list">
    <Header></Header>
    <div class="section">
      <div class="page-container">
        <h2 class="subpage-title">新闻头条</h2>
        <div class="subpage-content">
          <div class="news-list-container">
            <div class="news-item" v-for="(item, index) in newsList" :key="index">
              <div class="news-pic">
                <img :src="item.pic" alt="">
              </div>
              <div class="news-content">
                <div class="title">{{item.title}}</div>
                <div class="btn"><a :href="item.anchor">查看详情</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

const newsList = [
  { pic: require('../assets/2222.png'), title: '城市更新产业创新发展论坛', anchor: 'javascript:' },
  { pic: require('../assets/2222.png'), title: '城市更新产业创新发展论坛', anchor: 'javascript:' },
  { pic: require('../assets/2222.png'), title: '城市更新产业创新发展论坛', anchor: 'javascript:' },
  { pic: require('../assets/2222.png'), title: '城市更新产业创新发展论坛', anchor: 'javascript:' },
  { pic: require('../assets/2222.png'), title: '城市更新产业创新发展论坛', anchor: 'javascript:' },
  { pic: require('../assets/2222.png'), title: '城市更新产业创新发展论坛', anchor: 'javascript:' },
  { pic: require('../assets/2222.png'), title: '城市更新产业创新发展论坛', anchor: 'javascript:' },
  { pic: require('../assets/2222.png'), title: '城市更新产业创新发展论坛', anchor: 'javascript:' },
]

export default {
  name: '',
  components: {
    Header,
  },
  data () {
    return {
      newsList
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
      font-size: 21px !important;
    }

    .sub-title {
      font-weight: bold !important;
      background-image: -webkit-linear-gradient(left,
      #f68100,
      #ca3372,
      #0089e1);
      font-size: 16px !important;
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

  .page-container {
    margin-top: 24px;
    max-width: 1100px;
    .subpage-title {
      color: #ffffff;
      font-size: 26px;
      text-align: center;
      font-weight: bold;
      margin-bottom: 36px;
    }
    .subpage-content {
      .news-list-container {
        display: flex;
        flex-wrap: wrap;
        .news-item {
          width: calc(25% - 10px);
          background-color: #fff;
          margin: 10px 5px;
          @media screen and (max-width: 768px) {
            width: calc(50% - 10px);
          }
          .news-pic {
            img {
              width: 100%;
              height: 100%;
            }
          }
          .news-content {
            padding: 8px;
            .title {
              font-weight: bold;
              font-size: 16px;
            }
            .btn {
              margin-top: 18px;
              text-align: right;
              @media screen and (max-width: 768px) {
                display: none;
              }
              a {
                color: rgb(242, 163, 115);
                text-align: right;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
</style>
