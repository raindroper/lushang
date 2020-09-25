<template>
    <div class="meeting">
        <!-- 顶部导航栏 -->
        <Header></Header>
        <div class="section-wrapper intro">
            <div class="section">
                <div class="section-title">
                    <h1>大会介绍</h1>
                    <span class="sub-title">CONFERENCE INTRODUCTION</span>
                </div>
                <div class="describe">
                    <p>
                        2020年7月30日，中共中央政治局召开会议，会议指出，加快形成以国内大循环为主体、国内国际双循环相互促进的新发展格局。在新格局下，为深入贯彻落实习近平总书记视察山东重要讲话、重要指示批示精神特别是关于科技创新的重要指示精神，完成新旧动能转换任务，践行积极培育
                        “十强”产业集群、增强科技创新能力等任务，促进重点产业链高质量发展，巩固青年人作为推动社会创新创业的中坚力量，经山东省委、省政府批准，决定在济南举办首届产业创新大会。
                    </p>
                    <p>
                        2020年，在全球疫情和经济困境的大背景下，危机中我们迎来新的大时代，创新、合作、共赢、奋斗是我们变危为机的唯一的出路。
                    </p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">
                <h1>大会流程</h1>
                <span class="sub-title">CONFERENCE AGENDA</span>
            </div>
            <div>
                <div class="topic">
                    <h2 class="topic-title">大会总论坛</h2>
                    <span v-if="!isMobile">8:30-12:15</span>
                </div>
                <div class="topic-content">
                    <div class="content-item" v-for="(item, index) in list1" :key="index">
                        <div class="item-time">{{item.time}}</div>
                        <i class="item-divider"></i>
                        <div class="item-content">{{item.content}}</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="topic">
                    <h2 class="topic-title">大会分论坛</h2>
                    <span v-if="!isMobile">14:00-17:30</span>
                </div>
                <div class="topic-desc">
                    文化旅游及城乡融合与城市更新创新发展论坛
                </div>
                <div class="topic-content">
                    <div class="content-item" v-for="(item, index) in list2" :key="index">
                        <div class="item-time">{{item.time}}</div>
                        <i class="item-divider"></i>
                        <div class="item-content">{{item.content}}</div>
                    </div>
                </div>
                <div class="topic-desc">
                    新一代信息技术及现代金融服务产业创新发展论坛
                </div>
                <div class="topic-content">
                    <div class="content-item" v-for="(item, index) in list3" :key="index">
                        <div class="item-time">{{item.time}}</div>
                        <i class="item-divider"></i>
                        <div class="item-content">{{item.content}}</div>
                    </div>
                </div>
                <div class="topic-desc">
                    现代高效农业及医养健康产业创新发展论坛
                </div>
                <div class="topic-content">
                    <div class="content-item" v-for="(item, index) in list3" :key="index">
                        <div class="item-time">{{item.time}}</div>
                        <i class="item-divider"></i>
                        <div class="item-content">{{item.content}}</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="topic">
                    <h2 class="topic-title">企业家沙龙</h2>
                    <span v-if="!isMobile">18:00-21:30</span>
                </div>
                <div class="topic-desc" v-if="isMobile">
                    18:00-21:30
                </div>
            </div>
        </div>
        <div class="section-wrapper activity">
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
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

const list1 = [
  {
    time: '08:30-09:40',
    content: '大会主旨演讲',
  },
  {
    time: '09:40-09:50',
    content: '“产业创新联盟”启动仪式',
  },
  {
    time: '09:50-10:00',
    content: '《产业创新大会山东省产业园区地图》发布',
  },
  {
    time: '10:10-10:20',
    content: '鲁商“智学、智汇、智造、智能、智享”五智系列产业园区发布',
  },
  {
    time: '10:20-10:40',
    content: '鲁商集团首批“五智”十强产业园区发布',
  },
  {
    time: '10:40-11:00',
    content: '青年企业家创新发展国际峰会产业园区联盟产业园区发布',
  },
  {
    time: '11:00-11:25',
    content: '创新产业园区合作项目签约仪式',
  },
  {
    time: '11:25-11:35',
    content: '创新产业园区资本联盟签约仪式',
  },
  {
    time: '11:35-11:45',
    content: '创新产业园区媒体联盟签约仪式',
  },
  {
    time: '11:45-11:55',
    content: '促进产业消费扶贫联盟签约仪式',
  },
  {
    time: '11:55-12:05',
    content: '山东省十强产业国家课题组签约仪式',
  },
  {
    time: '12:05-12:15',
    content: '国家实体经济研究院山东分院成立仪式',
  },
];
const list2 = [
  {
    time: '14:00-14:40',
    content: '论坛主旨演讲',
  },
  {
    time: '14:40-14:55',
    content: '山东省文化创意产业发展情况介绍',
  },
  {
    time: '14:55-15:10',
    content: '山东省精品旅游产业发展情况介绍',
  },
  {
    time: '15:10-15:40',
    content: '鲁商文化旅游产业发展情况介绍',
  },
  {
    time: '16:00-16:30',
    content: '国内知名文化旅游企业项目推介及合作签约',
  },
  {
    time: '16:30-17:00',
    content: '鲁商城市更新与城乡融合产业发展情况',
  },
  {
    time: '17:00-17:30',
    content: '国内知名城市更新与城乡融合企业项目推介及合作签约',
  },
];
const list3 = [
  {
    time: '14:00-14:40',
    content: '论坛主旨演讲',
  },
  {
    time: '14:40-14:55',
    content: '山东省新一代技术信息产业发展情况介绍',
  },
  {
    time: '14:55-15:25',
    content: '鲁商信息产业发展情况介绍',
  },
  {
    time: '15:25-15:55',
    content: '国内知名新一代信息技术企业项目推介及合作签约',
  },
  {
    time: '16:15-16:35',
    content: '山东省现代金融服务产业发展情况介绍',
  },
  {
    time: '16:35-17:05',
    content: '鲁商现代金融服务产业发展情况介绍',
  },
  {
    time: '17:05-17:30',
    content: '国内知名现代金融服务企业项目推介',
  },
];
const list4 = [
  {
    time: '14:00-14:40',
    content: '论坛主旨演讲',
  },
  {
    time: '14:40-15:00',
    content: '山东省现代高效农业产业发展情况介绍',
  },
  {
    time: '15:00-15:30',
    content: '国内知名现代高效农业企业项目推介',
  },
  {
    time: '15:30-15:50',
    content: '山东省医养健康产业发展情况介绍',
  },
  {
    time: '16:10-16:55',
    content: '鲁商医养健康产业发展情况介绍',
  },
  {
    time: '16:55-17:30',
    content: '国内知名医养健康企业项目推介',
  },
];

export default {
  name: 'Meeting',
  components: {
    Header,
  },
  data () {
    return {
      activityList: [
        1, 1, 1, 1, 1, 1, 1, 1,
      ],
      isMobile: false,
      list1,
      list2,
      list3,
      list4,
    };
  },
  created () {
    this.isMobile = document.body.clientWidth <= 1000;
  },
};
</script>

<style lang="less">
    .meeting {
        background:#020226 !important;
        .section-wrapper {
            &.activity {
                padding-top: 1px;
                background-image: url('../assets/meeting-bg2-m.jpg');
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                background-position: center center;
                @media screen and (min-width: 768px) {
                    padding-top: 20px;
                    background-image: url('../assets/meeting-bg2.jpg');
                    -webkit-background-size: 100% 100%;
                    background-size: 100% 100%;
                    background-position: center center;
                    background-repeat: no-repeat;
                }
            }
            &.intro {
                padding: 1px 0 10px;
                background-image: url('../assets/meeting-bg.png');
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                background-position: center center;
                background-repeat: no-repeat;
                @media screen and (min-width: 768px) {
                    padding: 30px 0 70px;
                    background-image: url('../assets/meeting-bg.png');
                    -webkit-background-size: 100% 100%;
                    background-size: 100% 100%;
                    background-position: center center;
                    background-repeat: no-repeat;
                }
            }
        }
        .section {
            text-align: left;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 60px;
            padding: 0 50px;

            .section-title {
                margin-bottom: 30px;
                font-weight: bold !important;
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
            .topic-title {
                margin: 0;
                color: #ffffff;
                font-weight: bold !important;
            }

            background-image: linear-gradient(90deg,
            #f68100 0%,
            #ca3372 61%,
            #0089e1 100%);

        }
        .topic-content {
            .content-item {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                margin-bottom: 10px;
                .item-time {
                    width: 80px;
                    color: #F4F6F7;
                    flex-shrink: 0;
                }
                .item-divider {
                    width: 3px;
                    height: 20px;
                    background-color: #F68100;
                    flex-shrink: 0;
                    margin: 0 40px;
                    @media screen and (max-width: 768px) {
                        margin: 0 8px 0 0;
                    }
                }
                .item-content {
                    color: #F4F6F7;
                }
            }
        }

        .topic-desc {
            color: #F68101;
            margin: 24px 0;
            font-size: 16px;
            &:nth-of-type(1) {
                margin: 8px 0 24px;
            }
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
                    height: 175px;
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
                @media screen and (max-width: 768px) {
                    width: 50%;
                    height: 200px;
                    .item-desc {
                        height: 50px;
                        line-height: 30px;
                        font-size: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    img {
                        width: 100%;
                        height: 135px;
                    }
                }
            }
        }
    }
</style>
