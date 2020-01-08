<template>
  <div>
    <van-row>
      <van-col span="8">
        <elm-menus></elm-menus>
      </van-col>
      <van-col span="16">
        <router-view></router-view>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import ElmMenus from 'component/elm-home/Menus/menuslist'
export default {
  name: "ElmGoods",
  components : {
      ElmMenus
  }
};
</script>
<style lang="scss" scoped>
</style>