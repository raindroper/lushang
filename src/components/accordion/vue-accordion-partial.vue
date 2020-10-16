<template>
    <li class="vue-accordion-li" :style="liStyles" :class="{active}" @click="partialClick">
        <a href="javascript:" :style="aStyles"></a>
        <footer class="footer">
            <div class="footer-index">{{item.index}}</div>
            <div class="footer-title">精确把握个性需求引领时代</div>
            <div class="footer-desc">
                <div class="footer-content">精准把握个性需求，引领时代潮流科技精准把握个性需求，引领时代潮流科技</div>
                <div class="footer-more" @click="$router.push({name: 'NewsDetail'})">查看更多></div>
            </div>
        </footer>
    </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
    styles: {
      type: Object,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    liStyles () {
      const li = {
        backgroundImage: 'url(' + this.item.image + ')',
      };

      if (this.styles && this.styles.li)
        Object.assign(li, this.styles.li);

      return li;
    },
    aStyles () {
      return this.styles && this.styles.a ? this.styles.a : {};
    },
    h2Styles () {
      return this.styles && this.styles.h2 ? this.styles.h2 : {};
    },
    pStyles () {
      return this.styles && this.styles.p ? this.styles.p : {};
    },
  },
  methods: {
    partialClick () {
      this.$emit('partialClick');
    },
  },
};
</script>
<style lang="less">
    .vue-accordion ul li {
        display: table-cell;
        vertical-align: bottom;
        position: relative;
        width: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        transition: all 500ms ease;
        height: 100%;
        box-shadow: -5px 0 10px 0 hsla(222, 9%, 77%, .5);
    }

    .vue-accordion ul li a {
        display: block;
        width: 100%;
        position: relative;
        z-index: 3;
        vertical-align: bottom;
        padding: 15px 20px;
        box-sizing: border-box;
        color: #fff;
        text-decoration: none;
        transition: all 200ms ease;
        height: 100%;
    }

    .vue-accordion ul li:not(.active) {
        /*background-color: rgba(0, 0, 0, 0.4);*/
    }

    .vue-accordion ul li a * {
        opacity: 0;
        margin: 0;
        width: 100%;
        text-overflow: ellipsis;
        position: relative;
        z-index: 5;
        white-space: nowrap;
        overflow: hidden;
        -webkit-transform: translateX(-20px);
        transform: translateX(-20px);
        -webkit-transition: all 400ms ease;
        transition: all 400ms ease;
    }

    .vue-accordion ul li {
        width: 5%;
    }

    .vue-accordion ul li.active {
        width: 80%;
    }

    .vue-accordion ul li.active a {
    }

    .vue-accordion ul li.active a * {
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    .vue-accordion .footer {
        background-color: #fff;
        height: 68px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        overflow: hidden;
    }

    .vue-accordion-li {
        .footer {
            .footer-index {
                flex-shrink: 0;
                width: 60px;
                height: 58px;
                line-height: 58px;
                text-align: center;
            }

            .footer-title {
                width: 160px;
                font-size: 16px;
                color: #1A1C1F;
                margin: 0 12px;
            }

            .footer-desc {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-around;

                .footer-content {
                    font-size: 14px;
                    color: #BFBFC0;
                    margin-bottom: 7px;
                }

                .footer-more {
                    cursor: pointer;
                    font-size: 16px;
                    color: #E6A100;
                }
            }
        }
    }
</style>
