<template>
  <div class="header-box">
    <div class="left-icon">
      <span v-if="showback" @click="back" class="icon-back"></span>
    </div>
    <div class="header-title">
        <span v-if="showinput">
          <cus-input></cus-input>
        </span>
      <span v-if="!showinput">{{title}}</span>
    </div>
    <div class="right-icon">
      <span @click="rightNext">{{rightText}}</span>
      <span v-if="showmore" class="icon"></span>
      <span v-if="showsearch" class="search-icon" @click="showSearch"></span>
      <span v-if="showadd" class="add-icon" @click="showAdd"><i class="iconfont icon-chuangzuo"></i></span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      showright: {
        type: Boolean,
        default: false
      },
      showleft: {
        type: Boolean,
        default: false
      },
      showinput: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '标题'
      },
      rightText: {
        type: String,
        default: ''
      },
      showback: {
        type: Boolean,
        default: true
      },
      showmore: {
        type: Boolean,
        default: false
      },
      showsearch: {
        type: Boolean,
        default: false
      },
      showadd: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      back() {
        if (this.title === '搜索' || this.title === '扫一扫' || this.title === '选择办事大厅' || this.title === '人脸录制') {
          this.$emit('back');
        } else {
          this.$router.goBack()
        }
      },
      rightNext() {
        this.$emit('rightNext');
      },
      showSearch() {
        this.$emit('showSearch');
      },
      showAdd() {
        this.$emit('showAdd');
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~styles/index.less";
  @import "~styles/variable.less";

  .header-box {
    // position: fixed;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 60upx;
    line-height: 60upx;
    background-color: @base-color;
    // color: @base-header-color;
    color: white;
    .fs(@base-header-size);
    display: flex;
    z-index: 1;
    text-align: center;

    .left-icon {
      position: relative;
      flex: 1;

      .icon-back {
        position: absolute;
        display: inline-block;
        width: 50upx;
        height: 25upx;
        left: 25upx;
        margin-top: 25upx;
        background-image: url("../../static/imgs/w-back.svg");
        background-size: cover;
      }

    }

    .header-title {
      flex: 3;
      margin-top: 11upx;
      text-align: center;
      color: white;
    }

    .right-icon {
      position: relative;
      flex: 1;
      margin-top: 11upx;

      .icon {
        position: absolute;
        display: inline-block;
        width: 50upx;
        height: 25upx;
        right: 25upx;
        margin-top: 19upx;
        background-image: url("../../static/imgs/more.svg");
        background-size: cover;
      }

      .search-icon {
        position: absolute;
        display: inline-block;
        width: 50upx;
        height: 25upx;
        margin-top: 19upx;
        right: 25upx;
        background-image: url("../../static/imgs/search-white.svg");
        background-size: cover;
      }
      .add-icon{
        line-height: 58upx;
        font-size: 25upx;
        margin-left: 20upx;
      }
    }
  }
</style>
