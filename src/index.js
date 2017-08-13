import SideBar from './components/SideBar.vue'

const SideBarPlugin = {
  install: function(Vue, options) {
    Vue.component(SideBar.name, SideBar)
  },
}

export default SideBarPlugin
export {
   SideBar as VueSideBar
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SideBarPlugin)
}
