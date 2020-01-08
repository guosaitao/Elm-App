<template>
  <div>
    <elm-header></elm-header>
    <elm-tablist></elm-tablist>
    <div>
     <router-view></router-view>
    </div>
  </div>
</template> 

<script>
import ElmHeader from 'component/elm-home/Header/header'
import ElmTablist from 'component/elm-home/Tabs/tablist'
import axios from 'axios'
export default {
  name: 'ElmHome',
  components:{
      ElmHeader,
      ElmTablist
  }
}
</script>

<style lang="scss" scoped>

</style>
