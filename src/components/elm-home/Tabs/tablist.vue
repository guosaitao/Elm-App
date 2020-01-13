<template>
    <div class="tabs">
        <van-row type="flex" justify="center">
            <van-col span="8" class="tab_item">
                <router-link to="/goods">商品</router-link>
            </van-col>
            <van-col span="8" class="tab_item">
                <router-link to="/appraise">评价</router-link>
            </van-col>
            <van-col span="8" class="tab_item">
                <router-link to="/seller">商家</router-link>
            </van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    name:"ElmTablist"
}
</script>
<style lang="scss" scoped>
    .tabs{
        text-align: center;
        .tab_item{
            line-height: .7rem;
            a{
                color: #666;
            }
        }
        .active{
            color: rgb(240, 20, 20) !important;
        }
    }
</style>