<template>
  <div class="Nav">
    <div class="pc-header">
      <div class="logo">
        <img src="../assets/logo.png" style="width:80px"/>
      </div>
      <div class="right-menu">
        <a href="/" class="menu-item" :class="[pathName=='/'?'menu-item-selected':'']">首页</a>
        <a href="/news" class="menu-item" :class="[pathName=='/news'?'menu-item-selected':'']">新闻中心</a>
        <a
          href="/meeting"
          class="menu-item"
          :class="[pathName=='/meeting'?'menu-item-selected':'']"
        >走进大会</a>
        <a href="#" class="blue-btn">立即报名</a>
      </div>
    </div>

    <div class="mobile-header">
      <div class="logo">
        <img src="../assets/logo.png" style="width:80px"/>
      </div>
      <div class="right-menu" @click="drawer = true">
        <img src="../assets/menu.png" style="width:40px"/>
      </div>

      <el-drawer title="菜单导航" :visible.sync="drawer" :with-header="false" size="100%">
        <div class="menu-item">
          <a href="/">首 页</a>
          <div class="menu_close-btn" @click="closeNav()" style="cursor: pointer;">
            <img src="../assets/close.png" alt="" srcset="" width="20px"/>
          </div>
        </div>
        <div class="menu-item">
          <a href="/news">新闻中心</a>
        </div>
        <div class="menu-item">
          <a href="/meeting">走进大会</a>
        </div>
        <div class="menu-item">
          <a href="#">立即报名</a>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      pathName: '',
      drawer: false,
    }
  },
  mounted () {
    this.pathName = this.$route.path
    console.log(this.pathName)
  },
  methods: {
    closeNav () {
      this.drawer = false
    }
  }
}
</script>


<style lang="less">
  .Nav {
    width: 100%;
    height: 70px;
    background: #000000;

    .pc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      height: 70px;

      .right-menu {
        display: flex;
        align-items: center;

        .menu-item {
          margin-left: 40px;
          padding: 10px 5px;
          border-bottom: 4px solid #000000;
        }

        .menu-item:hover {
          color: #f37f00;
          border-bottom: 4px solid #f37f00;
        }

        .menu-item-selected {
          color: #f37f00;
          border-bottom: 4px solid #f37f00;
        }

        a {
          text-decoration: none;
          color: #ffffff;
        }

        .blue-btn {
          margin-left: 40px;
          padding: 8px 20px;
          background-image: linear-gradient(90deg,
          #0188e0 6%,
          #1f1ce2 100%);
          border-radius: 20px;
        }
      }
    }

    .mobile-header {
      display: none;
    }

    @media screen and (max-width: 768px) {
      .pc-header {
        display: none;
      }

      .mobile-header {
        .el-drawer__wrapper {
          opacity: 0.9;
          background: #000;
        }

        .el-drawer__body {
          background: #000000;
          opacity: 0.9;
        }

        display: block;
        display: flex;
        height: 70px;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        text-align: left;

        .menu-item {
          padding: 20px 20px;
          border-bottom: 1px solid #1d1d1d;
          position: relative;
          .menu_close-btn {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
          }
          a {
            font-size: 16px;
            text-decoration: none;
            color: #fff;
          }
        }

        .blue-btn {
          a {

            padding: 8px 16px;
            text-decoration: none;
            color: #ffffff;

            background-image: linear-gradient(90deg,
            #0188e0 6%,
            #1f1ce2 100%);
            border-radius: 20px;
          }

          margin: 30px 15px;
        }
      }
    }

    .color-font {
      background-image: -webkit-linear-gradient(right,
      #1890ff,
      #fd8403,
      yellow);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
