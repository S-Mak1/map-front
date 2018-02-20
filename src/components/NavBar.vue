<template>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">Карта Нытвы</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Поиск" v-model="mapSearchValue" v-on:input="mapSearch"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Найти</b-button>
          </b-nav-form>


        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

<!-- navbar-1.vue -->

</template>

<script>

import gql from 'graphql-tag'

export default {
  data: function () {
    return {
      mapSearchValue: ''
    }
  },
  updated: function () {
    for (var i = 0; i < this.route.length; i++) {
      // L.geoJSON(JSON.parse(this.route[i].way), {
      //   style: {
      //     'color': '#ff7800',
      //     'weight': 5,
      //     'opacity': 0.65
      //   }}
//      @todo разобраться, почему конструкция не отображает объект на карте
      // ).addTo(this.$parent.$refs.map.mapObject)
    }
  },
  apollo: {
    // Route
    route: {
      // GraphQL Query
      query: gql`query($ref: Int){
        route(ref: $ref) {
          osmId,
          name,
          ref,
          way
        }
      }`,
      // Initial variables
      variables: {
        ref: 1
      }
    }
  },
  methods: {
    mapSearch: function (value) {
      var parsed = parseInt(value)
      this.$apollo.queries.route.fetchMore({
        // New variables
        variables: {
          ref: parsed
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          var routeList = fetchMoreResult
          return routeList
        }
      })
    }
  }
}
</script>
