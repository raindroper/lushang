<template>
    <div class="home">
        <!-- 顶部导航栏 -->
        <Header></Header>
        <div class="top-banner">
            <img :src="bannerImg" width="100%" />
        </div>

        <div class="section">
            <div class="section-title">
                <h1>新闻头条</h1>
                <span class="sub-title">NEWS HEADLINES</span>
            </div>
            <div>
                <template v-if="isMobile">
                    <carousel :dots="false" :autoplay="true">
                        <div class="carousel-item" v-for="item in items" :key="item.index">
                            <img style="width: 100%;height: 198px;" :src="item.image" alt="">
                            <div class="carousel-footer">
                                <span class="footer-index">{{item.index}}</span>
                                <span class="footer-title">精准把握个性需求引领时代</span>
                            </div>
                        </div>
                    </carousel>
                </template>
                <template v-else>
                    <accordion :items="items" style="margin-bottom: 30px;" />
                </template>
            </div>
        </div>

        <div class="section">
            <div class="section-title">
                <h1>嘉宾风采</h1>
                <span class="sub-title">CONFERENCE SPEAKERS</span>
            </div>
        </div>
        <div class="section-1300">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="(item,index1) in guestData" :key="index1">
                    <div class="person-wrap">
                        <div @click="goGuest(subItem)" class="person-item" v-for="(subItem, index) in item.info"
                             :key="index">
                            <img :src="subItem.img" width="100%" />
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import {vueAccordion} from '../components/accordion/index';
import Carousel from 'ant-design-vue/lib/carousel';

import 'ant-design-vue/dist/antd.css';

export default {
  name: 'Home',
  components: {
    Header,
    Accordion: vueAccordion,
    Carousel,
  },
  data () {
    return {
      guestData: [],
      bannerImg: null,
      items: [
        {
          title: 'First',
          text: 'text',
          url: '#',
          image: require('../assets/banner2.png'),
          index: '01',
        },
        {
          title: 'First',
          text: 'text',
          url: '#',
          image: require('../assets/banner.png'),
          index: '02',
        },
        {
          title: 'First',
          text: 'text',
          url: '#',
          image: require('../assets/banner2.png'),
          index: '03',
        },
        {
          title: 'First',
          text: 'text',
          url: '#',
          image: require('../assets/11122.png'),
          index: '04',
        },
        {
          title: 'First',
          text: 'text',
          url: '#',
          image: require('../assets/banner2.png'),
          index: '05',
        },
        {
          title: 'First',
          text: 'text',
          url: '#',
          image: require('../assets/banner2.png'),
          index: '06',
        },
      ],
      isMobile: false,
    };
  },
  created () {
    this.isMobile = document.body.clientWidth <= 1000;
  },
  methods: {
    goGuest (item) {
      console.log(item);
      this.$router.push({ name: 'Guest' });
    },
  },
  mounted () {
    if (!this.isMobile) {
      this.bannerImg = require('../assets/pc_banner.jpg');
      this.guestData = [
        {
          info: [
            {
              img: require('../assets/嘉宾1.png'),
            },
            {
              img: require('../assets/嘉宾2.png'),
            },
            {
              img: require('../assets/嘉宾3.png'),
            },
            {
              img: require('../assets/嘉宾4.png'),
            },
            {
              img: require('../assets/嘉宾5.png'),
            },
          ],
        },
        // {
        //   info: [
        //     {
        //       img: require('../assets/guest.png'),
        //     },
        //     {
        //       img: require('../assets/guest.png'),
        //     },
        //   ],
        // },
      ];
    } else {
      this.bannerImg = require('../assets/banner2.png');
      this.guestData = [
        {
          info: [
            {
              img: require('../assets/guest.png'),
            },
            {
              img: require('../assets/guest.png'),
            },
          ],
        },
        {
          info: [
            {
              img: require('../assets/guest.png'),
            },
            {
              img: require('../assets/guest.png'),
            },
          ],
        },
      ];
    }
  },
};
</script>

<style lang="less">
    .home {
        .vue-accordion {
            height: 400px;
            max-width: 1200px;
        }

        padding-bottom: 150px;

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

        .section-1300 {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 40px;

            .el-carousel__arrow {
                background-color: rgb(255 255 255 / 1%);
                font-size: 40px;
            }

            .el-carousel__indicators--horizontal {
                display: none;
            }

            .person-wrap {
                display: flex;
                align-items: center;
                margin-left: 50px;
                margin-right: 50px;
                @media screen and (max-width: 768px) {
                    margin: 30px 0 0;
                    width: 100%;
                    padding: 0 20px;
                    box-sizing: border-box;
                }

                .person-item {
                    cursor: pointer;
                    width: calc(20% - 20px);
                    max-width: 1200px;
                    @media screen and (max-width: 768px) {
                        width: calc(50% - 20px);
                    }
                    // height: 290px;
                    margin-left: 10px;
                    margin-right: 10px;
                }
            }
        }

        .carousel-item {
            height: 228px;

            .carousel-footer {
                height: 30px;
                background-color: #ffffff;
                line-height: 30px;
                padding: 0 15px;
                box-sizing: border-box;

                .footer-index {
                    font-size: 14px;
                    color: #3F4041;
                    margin-right: 6px;
                }

                .footer-title {
                    font-size: 12px;
                    color: #1A1C1F;
                }
            }
        }
    }
</style>
