<template>
  <div class="header_box">
    <div class="header">
      <div class="header_img">
        <img :src="seller.avatar" />
      </div>
      <div class="header_include">
        <div class="title_img"></div>
        <div class="title">{{seller.name}}</div>
        <div class="zs">
         {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="mj">
          <div class="icon"></div>
          <div class="des">{{seller.supports[0].description}}</div>
        </div>
        <div class="num">
          {{seller.supports.length}}个
          <span class="icons"></span>
        </div>
      </div>
      <div class="background">
          <img :src="seller.avatar" />
      </div>
    </div>
    <div class="header_tip">
      <div class="tip_img"></div>
      <div class="tip">{{seller.bulletin}}</div>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'ElmHeader',
  props:{
    seller:Object
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/elm.sass';
.header_box{
  position: relative;
  background: rgba(7,17,27,0.5);
  color: #fff;
  .header{
    position: relative;
    padding: 0.48rem 0.24rem 0.36rem 0.48rem;
    overflow: hidden;
    .header_img{
      float: $left;
      width: 1.28rem;
      height: 1.28rem;
      img{
        width: 100%;
      }
    }
    .header_include{
      float: $left;
      margin-left: .2rem;
      .title_img{
        background: url(bg-images('brand@2x')) no-repeat;
        background-size: contain;
        display: inline-block;
        vertical-align: top;
        width: .6rem;
        height: .36rem;
      }
      .title{
          display: inline-block;
          margin-left: 0.12rem;
          font-weight: bold;
          font-size: 0.32rem;
      }
      .zs{
        font-size: 0.24rem;
        line-height: .5rem;
        margin-bottom: .12rem;
      }
      .mj{
        .icon{
          width: .24rem;
          height: .24rem;
          background: url(bg-images('decrease_1@2x')) no-repeat;
          background-size:contain; 
          display: inline-block;
        }
        .des{
          display: inline-block;
          font-size: .2rem;
          margin-left: .1rem;
          line-height: 12px;
          vertical-align: top;
        }
      }
      .num{
        position: absolute;
        height: .48rem;
        right: .32rem;
        line-height: .48rem;
        padding: .05rem .3rem;
        background: rgba(0,0,0,0.2);
        text-align: center;
        border-radius: .56rem;
        font-size: .2rem;
        bottom: .28rem;
      }
    }
    .background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      img{
        width: 100%;
      }
    }
  }
  .header_tip{
    height: .56rem;
    line-height: .56rem;
    position: relative;
    padding: 0 .44rem 0 .24rem;
    background: rgba(7,17,27,0.2);
    .tip_img{
      background: url(bg-images('bulletin@2x')) no-repeat;
      background-size:contain;
      width: .44rem;
      height: .24rem;
      display: inline-block;
      vertical-align: top;
      margin-top: .15rem;
      margin-right:.05rem;
    }
    .tip{
      position: relative;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
      font-size: .2rem;
      width: 90%;
    }
  }
}
</style>
