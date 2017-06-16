<template>
    <div>
        <el-form ref="form">
            <el-form-item label="Prénom">
                <el-input v-model="firstName"></el-input>
            </el-form-item>
            <el-form-item label="Nom">
                <el-input v-model="lastName"></el-input>
            </el-form-item>
            <el-form-item label="Email">
                <el-input v-model="email"></el-input>
            </el-form-item>
            <el-form-item label="Pseudo">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="Mot de passe">
                <el-input v-model="password" type="password"></el-input>
            </el-form-item>
            <el-button @click="submit">S'inscrire</el-button>
        </el-form>
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
