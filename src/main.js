import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueResource from "vue-resource"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


import Vue2Leaflet from 'vue2-leaflet';

Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);

Vue.use(BootstrapVue)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
