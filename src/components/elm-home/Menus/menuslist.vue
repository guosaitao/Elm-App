<template>
  <div>
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item v-for="item of menusList" :key="item.index" :title="item.name"/>
    </van-sidebar>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "ElmMenus",
  data () {
      return {
          activeKey:0,
          menusList:[]
      }
  },
  methods:{
    getMenusData () {
      axios.get("/api/goods").then(this.getMenusDataSuccess)
    },
    getMenusDataSuccess (res) {
      this.menusList=res.data.data
    },
      onChange (index) {
          this.$router.push('/goodslist/'+index)
      }
  },
  mounted () {
    this.getMenusData()
  }
};
</script>
<style lang="scss" scoped>

</style>