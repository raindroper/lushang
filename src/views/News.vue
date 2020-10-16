<template>
    <div class="news">
        <!-- 顶部导航栏 -->
        <Header></Header>
        <div class="section">
            <div class="section-title">
                <h1>精彩图集</h1>
                <span class="sub-title">CONFERENCE SPEAKERS</span>
            </div>
            <a target="_blank"
               href="http://www.wanyudc.com/action/fzimdc/index.php/ShareImgIndex/ShareImg/index/space_sign/wyzw3d37b11c-8eb4-fe66-02bf-a6b1a20895a1"
               class="img-warp">
                <img class="news-banner" src="../assets/news-banner.png" alt="">
            </a>
        </div>
        <div class="section">
            <div class="section-title">
                <h1>图片新闻</h1>
                <span class="sub-title">CONFERENCE SPEAKERS</span>
                <router-link to="/news/list" class="section-more">更多 ></router-link>
            </div>
            <div class="news-wrap">
                <div class="img-news-item" v-for="(item,index) in newsData" :key="index"
                     @click="$router.push({name: 'NewsDetail'})">
                    <img :src="item.imgsrc" height="100%" />
                    <div style="padding:15px">
                        <p>{{item.title}}</p>
                        <span class="news-time">{{item.date}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">
                <h1>官方公告</h1>
                <span class="sub-title">CONFERENCE SPEAKERS</span>
            </div>
            <div class="notic-wrap">
                <div class="img-notic-item" v-for="(item,index) in noticData" :key="index">
                    <div style="padding:15px" class="left-wap">
                        <div class="date-wrap">
                            <h3>{{item.date}}</h3>
                            <span>{{item.date2}}</span>
                        </div>
                        <div>
                            <p style="font-weight: bold">{{item.title}}</p>
                            <span>{{item.subTitle}}</span>
                        </div>
                    </div>
                    <img :src="item.imgsrc" height="100%" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

export default {
  name: 'News',
  components: {
    Header,
  },
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        // "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
      fit: 'fill',
      newsData: [
        {
          title: '青年企业家创新发展国际 峰会大会完美收官',
          date: '2020.10.23',
          imgsrc: require('../assets/11122.png'),
        },
        {
          title: '青年企业家创新发展国际 峰会大会完美收官',
          date: '2020.10.23',
          imgsrc: require('../assets/11122.png'),
        },
      ],
      noticData: [
        {
          title: '青年企业家创新发展国际 峰会大会完美收官',
          subTitle: '所有参会人员必读',
          date: '2020',
          date2: '10.23',
          imgsrc: require('../assets/2222.png'),
        },
        {
          title: '青年企业家创新发展国际 峰会大会完美收官',
          subTitle: '所有参会人员必读',
          date: '2020',
          date2: '10.23',
          imgsrc: require('../assets/2222.png'),
        },
      ],
    };
  },
};
</script>

<style lang="less">
    .el-image-viewer__close {
        color: #fff;
    }

    .img-warp {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        height: 512px;
        cursor: pointer;
        .news-banner {
            width: 100%;
            height: 100%;
        }
        @media screen and (max-width: 768px) {
            height: 270px;
        }
        width: 100%;
        border-radius: 4px;

        .sub-img-wap {
            display: flex;
            justify-content: space-between;
            border-radius: 4px;
        }

        .img-item {
            background: #ffffff;
            border-radius: 4px;
            overflow: hidden;
        }
    }

    .news {
        margin-bottom: 100px;

        .section {
            text-align: left;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 70px;
            padding: 0 50px;

            .section-title {
                position: relative;
                cursor: pointer;
                font-weight: bold !important;

                .section-more {
                    position: absolute;
                    right: 50px;
                    top: 45%;
                    font-size: 18px;
                    color: #ffffff;
                    @media screen and (max-width: 768px) {
                        right: 20px;
                    }
                }
            }

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

        .notic-wrap {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            margin-top: 30px;

            .img-notic-item {
                .left-wap {
                    display: flex;
                    align-items: center;

                    .date-wrap {
                        margin-right: 20px;
                    }
                }

                border-radius: 4px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 135px;
                background: #fff;
                margin-bottom: 20px;
                @media screen and (max-width: 768px) {
                    .date-wrap {
                        display: none;
                    }

                    font-size: 12px;
                    width: calc(100%);
                    height: 70px;
                    p {
                        font-weight: 800;
                        margin: 0;
                    }
                }
            }
        }

        .news-wrap {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;

            img {
                border-radius: 4px 0 0 4px;
            }

            .img-news-item {
                cursor: pointer;
                width: calc(50% - 20px);
                height: 200px;
                border-radius: 4px;
                @media screen and (max-width: 768px) {

                    width: calc(100%);
                    height: 70px;
                    font-size: 12px;
                    p {
                        margin: 0;
                    }
                }
                background: #fff;
                margin: 10px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                p {
                    font-weight: 800;
                    color: #000;
                }
            }
        }
    }
</style>
