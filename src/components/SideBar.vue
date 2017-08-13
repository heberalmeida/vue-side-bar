<template lang="pug">
#app
  .side-bar
    a(v-for='(menu, index) in menus', :key='index', :href='menu.url', :target='menu.target', :title='menu.title')
      i(:class='menu.icon')
</template>

<script>
export default {
    name: 'vue-side-bar',
    props: {
        menus: { type: Array }
    }
}
</script>

<style lang="stylus" scoped>
.side-bar
    width 5vw
    position fixed
    bottom 2vw
    right 2vw
    font-size 0
    line-height 0
    z-index 100
    a
        width 5vw
        height 5vw
        display inline-block
        background-color #ddd
        margin-bottom 0.1vw
        &:hover
            background-color #669fdd
        i
            font-size 2vw !important
            text-align center
            color white
            width 100%
            position relative
            top 50%
            transform translateY(-50%)
</style>
