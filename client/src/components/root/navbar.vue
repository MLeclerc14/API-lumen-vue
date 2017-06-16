<template>
  <div>
    <spinner></spinner>
    <div id="app">
    <b-navbar toggleable class="container">
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>
        <b-link class="navbar-brand" to="#">
            <span>SPA Starter</span>
        </b-link>
        <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item :to="{ name: 'auth.login' }">Se connecter</b-nav-item>
          <b-nav-item :to="{ name: 'auth.register' }">S'inscrire</b-nav-item>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
        <b-nav-item-dropdown right v-if="isLogged">
          <template slot="text">
            <span style="font-weight: bold;">{{ currentUser.firstName }} {{ currentUser.lastName }}</span>
          </template>
          <b-dropdown-item to="">Mon compte</b-dropdown-item>
          <b-dropdown-item @click="logout">Se déconnecter</b-dropdown-item>
        </b-nav-item-dropdown>
     </b-nav>
 </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Spinner from '../general/spinner'

  export default {
    components: {
      Spinner
    },
    computed: {
     /**
      * See src/app/auth/vuex/getters.js
      */
      ...mapGetters(['currentUser', 'isLogged'])
    },
    watch: {
      isLogged (value) {
        if (value === false) {
          this.$router.push({ name: 'auth.login' })
        }
      }
    },
    methods: {
     /**
      * Makes logout() action available withint this component
      * See /src/app/auth/vuex/actions.js
      */
      ...mapActions(['logout']),
      /* eslint-disable no-undef */
      navigate (name) {
        switch (name) {
          case 'logout':
            this.logout()
            break
          default:
            this.$router.push({ name })
            break
        }
      }
    }
  }
</script>

<style scoped>
  .brand {
    font-size: 1.2em;
  }
</style>
