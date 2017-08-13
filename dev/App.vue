<template>
  <div>
    <vue-side-bar :menus="links"></vue-side-bar>
  </div>
</template>

<script>
  import Vue from 'vue' 
  import VueSideBar from '../src/index'
  Vue.use(VueSideBar) 
  export default {
    data(){
      return {
          links: [
              { title: 'Google Search', url: 'http://www.google.com', target: '_black', icon: 'fa fa-google-plus'},
              { title: 'Yahoo Search', url: 'http://www.yahoo.com', target: '_black', icon: 'fa fa-yahoo'},
              { title: 'Facebook', url: 'http://www.facebook.com', target: '_black', icon: 'fa fa-facebook'},
              { title: 'Flickr', url: 'http://www.flickr.com', target: '_black', icon: 'fa fa-flickr'}
          ]
      }
    }
  }
</script>
