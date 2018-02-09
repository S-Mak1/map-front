

<template>
    <div id="app">
        <navbar1> </navbar1>


        <v-map :zoom=14 :center="[57.943423, 55.331634]" class="h-100 w-100" ref="map">
          <v-tilelayer url="//a.tile.openstreetmap.org/{z}/{x}/{y}.png"></v-tilelayer>
        </v-map>

    </div>
</template>

<script>

import navbar1 from './navbar1.vue'

export default {
    name: 'app',
    data () {
      return {
        msg: '123123'
      }
    },
    components: {
        navbar1
    }
}
</script>

<style>
#app {
    height: 100%;
    width: 100%;
    position: absolute;
}
@import "~leaflet/dist/leaflet.css";

</style>
