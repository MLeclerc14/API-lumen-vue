<template>
  <div id="app">
    <div class="container">
      <navbar vshow="shouldShowNavigation"></navbar>
       <alerts></alerts>
      <router-view></router-view>
    </div>
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
