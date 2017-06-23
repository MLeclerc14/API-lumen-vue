<template>
    <div>
        <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
              <label>Prénom</label>
              <md-input v-model="firstName"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Nom</label>
              <md-input v-model="lastName"></md-input>
            </md-input-container>
             <md-input-container>
                <label>Email</label>
                <md-input v-model="username"></md-input>
              </md-input-container>
            <md-input-container  md-has-password>
            <label>Mot de passe</label>
            <md-input type="password" v-model="password"></md-input>
          </md-input-container>
          <md-button type="submit" class="md-raised md-primary">S'inscrire</md-button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
   /**
    * Map the actions from Vuex to this component.
    */
    ...mapActions(['register']),
   /**
    * Handle form's submit event
    */
    submit () {
      const { username, password } = this
      this.register({ username, password })
      .then(() => {
      })
    }
  }
}
</script>
