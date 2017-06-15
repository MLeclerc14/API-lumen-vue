<template>
    <div class="well">
        <el-form ref="form">
            <el-form-item label="Email">
                <el-input v-model="email"></el-input>
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
      email: '',
      password: ''
    }
  },
  methods: {
   /**
    * Map the actions from Vuex to this component.
    */
    ...mapActions(['attemptLogin', 'setMessage']),
   /**
    * Handle form's submit event
    */
    submit () {
      const { email, password } = this // http://wesbos.com/destructuring-objects/
      this.attemptLogin({ email, password }) // this is a Vuex action
      .then(() => {
        this.setMessage({ type: 'error', message: [] }) // this is a Vuex action
        this.$router.push({ name: 'dashboard.index' })
      })
    },
    /**
     * Reset component's local state
     */
    reset () {
      this.email = ''
      this.password = ''
    }
  }
}
</script>
