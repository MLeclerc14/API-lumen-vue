<template>
  <div id="app">
    <div class="container">
      <navbar></navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from './components/root/navbar'

export default {
  name: 'Root',
  components: {
    Navbar
  }
}
</script>
