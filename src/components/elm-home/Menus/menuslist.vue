<template>
  <div>
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="标签名称" :to="'/goodslist/'+index"/>
      <van-sidebar-item title="标签名称" :to="'/goodslist/'+index"/>
      <van-sidebar-item title="标签名称" :to="'/goodslist/'+index"/>
    </van-sidebar>
  </div>
</template>
<script>
export default {
  name: "ElmMenus",
  data () {
      return {
          activeKey:0,
          index:0
      }
  },
  methods:{
      onChange (index) {
          this.index=index
      }
  }
};
</script>
<style lang="scss" scoped>

</style>