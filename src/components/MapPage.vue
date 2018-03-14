<template>
  <div id="app">
    <NavBar> </NavBar>


    <v-map :zoom=14 :center="[57.943423, 55.331634]" class="h-100 w-100" ref="map">
      <v-tilelayer url="//a.tile.openstreetmap.org/{z}/{x}/{y}.png"></v-tilelayer>
      <v-geo-json :geojson="NavBar.geoData" :options="NavBar.style"></v-geo-json>
    </v-map>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
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
