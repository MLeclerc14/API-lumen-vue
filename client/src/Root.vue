<template>
  <div id="app">
    <navbar vshow="shouldShowNavigation"></navbar>
    <main class="main-content">
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './components/root/navbar'
import Alerts from './components/general/alerts'

export default {
  name: 'Root',
  components: {
    Navbar,
    Alerts
  },
  computed: {
    ...mapGetters(['shouldShowNavigation'])
  }
}
</script>

<style lang="sass" src="assets/sass/app.scss"></style>
