<template>
    <div>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>Email</label>
        <md-input v-model="username"></md-input>
      </md-input-container>
      <md-input-container  md-has-password>
        <label>Mot de passe</label>
        <md-input type="password" v-model="password"></md-input>
      </md-input-container>
      <md-button type="submit" class="md-raised md-primary">Se connecter</md-button>
    </form>
    </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
   /**
    * Map the actions from Vuex to this component.
    */
    ...mapActions(['attemptLogin', 'loadUser', 'setMessage']),
   /**
    * Handle form's submit event
    */
    submit () {
      const { username, password } = this
      this.attemptLogin({ username, password })
      .then(() => {
        this.setMessage({ type: 'error', message: [] })
        this.loadUser()
        this.$router.push({ name: 'dashboard.index' })
      })
    },
    /**
     * Reset component's local state
     */
    reset () {
      this.username = ''
      this.password = ''
    }
  }
}
</script>
