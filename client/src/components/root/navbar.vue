<template>
  <div>
    <spinner></spinner>
    <div class="app-viewport" id="file-list">
        <md-sidenav class="md-left md-fixed" ref="sidebar">
            <md-toolbar class="md-account-header">
                <md-list class="md-transparent">
                    <md-list-item class="md-avatar-list">
                        <md-avatar class="md-large">
                            <img src="https://placeimg.com/64/64/people/8" alt="People">
                        </md-avatar>
                        <span style="flex: 1"></span>
                    </md-list-item>
                    <md-list-item>
                        <div class="md-list-text-container">
                            <span>John Doe</span>
                            <span>johndoe@email.com</span>
                        </div>
                        <md-button class="md-icon-button md-list-action">
                            <md-icon>arrow_drop_down</md-icon>
                        </md-button>
                    </md-list-item>
                </md-list>
            </md-toolbar>
            <md-list>
              <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
                <md-icon>insert_drive_file</md-icon> <span>My files</span>
              </md-list-item>

              <md-list-item @click="$refs.sidebar.toggle()">
                <md-icon>people</md-icon> <span>Shared with me</span>
              </md-list-item>

              <md-list-item @click="$refs.sidebar.toggle()">
                <md-icon>access_time</md-icon> <span>Recent</span>
              </md-list-item>

              <md-list-item @click="$refs.sidebar.toggle()">
                <md-icon>start</md-icon> <span>Starred</span>
              </md-list-item>

              <md-list-item @click="$refs.sidebar.toggle()">
                <md-icon>delete</md-icon> <span>Trash</span>
              </md-list-item>
            </md-list>
          </md-sidenav>
          <md-whiteframe md-elevation="3" class="main-toolbar">
            <md-toolbar  md-theme="blue">
              <div class="md-toolbar-container">
                <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
                  <md-icon>menu</md-icon>
                </md-button>
                <router-link tag="h2" class="md-title" :to="{ name: 'home' }">SPA Starter</router-link>
                <span style="flex: 1"></span>
                <span class="auth" v-if="!isLogged">
                    <router-link tag="md-button" :to="{ name : 'auth.login' }">Se connecter</router-link>
                    <router-link tag="md-button" :to="{ name : 'auth.register' }">S'inscrire</router-link>
                </span>
                <md-button v-if="isLogged" @click="logout">Se déconnecter</md-button>
              </div>
            </md-toolbar>
          </md-whiteframe>
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
  .bd-masthead {
    color: #fff;
    background-image: linear-gradient(135deg,#4fc08d,#4fc08d);
  }
  .bd-masthead {
    padding-bottom: 4rem;
  }
  .bd-masthead {
    padding-top: 8rem;
    padding-bottom: 2rem;
  }
</style>
