<template>
  <div>
    <elm-header :seller="sellerData"></elm-header>
    <elm-tablist></elm-tablist>
    <div>
    <transition name="transitionName">
     <router-view></router-view>
    </transition>
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
  },
  data() {
    return {
      sellerData:{}
    }
  },
  methods:{
    getSellerData () {
      axios.get('/api/seller').then(this.getSellerDataSuccess)
    },
    getSellerDataSuccess (res) {
      this.sellerData=res.data.data
      console.log(res)
    }
  },
  mounted () {
    this.getSellerData()
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
}
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
