# vue-side-bar
A simple, menu side bar for VueJS (2.x) 

![Basic Screenshot](https://raw.githubusercontent.com/heberalmeida/vue-side-bar/HEAD/README/image/screenshot.png)

[Demo Site Font awesome](https://jsfiddle.net/sistemaweb/vuupkcb2/)

## Getting Started

### Prerequisites

The plugin is meant to be used with existing Vue 2.x projects. It uses ES6 features so as long as your build process includes a transpiler, you're good to go.

## Github
[GitHub](https://github.com/heberalmeida/vue-side-bar)

### Installing

Install with npm:
```
npm install --save vue-side-bar
```

import into project:
```
import Vue from 'vue'
import VueSideBar from 'vue-side-bar'

Vue.use(VueSideBar)
```

## Example Usage

```html
<template>
  <div>
    <vue-side-bar :menus="links"></vue-side-bar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueSideBar from 'vue-side-bar'
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
```

### Component Options
<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
      <th>Type, Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>menus</td>
      <td>Array containing objects</td>
      <td>
<pre lang="javascript">
  [
    {
      title: String,
      url: String,
      target: String (optional), 
      icon: String (optional) *import libs icon <-set class icon,
    }
    //...
  ]
</pre>
      </td>
    </tr>
 </tbody>
 </table>

## Authors

* **Heber Almeida** - *Initial work* - [heberalmeida](https://github.com/heberalmeida)

## License

This project is licensed under the MIT License
