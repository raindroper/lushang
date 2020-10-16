<template>
  <div class="guest">
    <Header></Header>
    <div class="guest-page">
      <div class="section">
        <div class="guest-title">
          嘉宾风采
        </div>
        <div class="guest-pic">
          <img :src="guestInfo.pic" alt="">
        </div>
        <div class="guest-name">
          {{guestInfo.name}}
        </div>
        <div class="guest-name-title">
          <div class="title-item" v-for="(item, index) in guestInfo.title" :key="index">
            {{item}}
          </div>
        </div>
        <div class="guest-desc">
          {{guestInfo.desc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import GuestInfo from '../source/guest'

const guestInfo = {
  pic: require('../assets/嘉宾1.png'),
  name: '孟晓苏',
  title: ['经济学博士', '原国家进出口检测局副局长'],
  desc: '孟晓苏博士，孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士、孟晓苏博士、孟晓苏博士，孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士，孟晓苏博士、孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士，孟晓苏博士孟晓苏博士孟晓苏博士孟晓苏博士、孟晓苏博士孟晓苏博士孟晓苏博士。孟晓苏博士孟晓苏博士孟晓苏博士，孟晓苏博士。'
}

export default {
  name: 'Guest',
  components: {
    Header,
  },
  data() {
    return {
      guestInfo
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
  .guest-page {
    padding-top: 1px;
    width: 100%;
    height: 100%;
    min-height: 800px;
    background-color: #ffffff;
    .guest-title {
      color: rgb(242, 135, 94);
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 36px;
    }
    .guest-pic {
      width: 240px;
      text-align: center;
      margin: 0 auto 36px;
      img {
        width: 100%;
      }
    }
    .guest-name {
      font-size: 16px;
      text-align: center;
      font-weight: bold;
      margin-bottom: 4px;
    }
    .guest-name-title {
      text-align: center;
      font-size: 12px;
      .title-item {
        margin-bottom: 4px;
      }
    }
    .guest-desc {
      font-size: 12px;
      line-height: 2;
      margin-top: 40px;
    }
  }
</style>
