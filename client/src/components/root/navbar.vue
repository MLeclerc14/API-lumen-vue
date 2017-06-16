<template>
  <div>
    <spinner></spinner>
    <!-- el-menu and its children comes from Element UI -->
    <!-- http://element.eleme.io/#/en-US/component/menu -->
    <el-menu theme="dark" default-active="1" class="cc-navigation"
      mode="horizontal" @select="navigate">
      <el-menu-item index="dashboard.index">Dashboard</el-menu-item>
      <el-submenu index="menu-user" class="logout-button">
        <template slot="title">{{ currentUser.firstName }}</template>
        <el-menu-item index="logout">Se déconnecter</el-menu-item>
      </el-submenu>
    </el-menu>
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
  .cc-navigation {
    padding-left: 115px;
    padding-right: 30px;
  }
  .brand {
    font-size: 1.2em;
  }
  .logout-button {
    float: right;
  }
  .version {
    position: absolute;
    right: 15px;
    top: 65px;
  }
</style>
