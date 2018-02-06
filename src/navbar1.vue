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

module.exports = {
  data: function() {
    return {
      mapSearchValue: ''
    }
  },
  methods: {
    mapSearch: function(value) {
      console.log(value);
      var data = {
        route(ref: 1)
        {
          osmId,
          name,
          ref,
          way
        }
      }
      this.$http.post("http://localhost/graphql", {
        query: "{route(ref: 1) {osmId,          name,          ref,          way        }}"
      }).then(
        response => function() {
          console.log(response.body);
        },
        response => function() {
          console.log(response.body);
        })
    }
  }
}
</script>
