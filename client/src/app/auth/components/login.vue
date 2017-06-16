<template>
    <div class="well">
        <el-form ref="form">
            <el-form-item label="Email">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="Mot de passe">
                <el-input v-model="password" type="password"></el-input>
            </el-form-item>
            <el-button @click="submit">Se connecter</el-button>
        </el-form>
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
