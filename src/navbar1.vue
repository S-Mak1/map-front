<template>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">Карта Нытвы</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Поиск" v-model="mapSearchValue"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" v-on:click="mapSearch">Найти</b-button>
          </b-nav-form>


        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

<!-- navbar-1.vue -->

</template>

<script>

module.exports = {
  data:  {
    mapSearchValue: ''    
  },
  methods: {
    mapSearch: function() {
      console.log(mapSearchValue);
      return false;
    }
  }
}
</script>
