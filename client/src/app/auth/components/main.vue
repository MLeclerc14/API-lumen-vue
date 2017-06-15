<template>
    <div class="container">
        <header class="page-header">
            <h3>Starter kit</h3>
            yo
        </header>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-3">
                <ul class="nav nav-pills nav-stacked">
                    <router-link tag="li" :to="{ name: 'auth.login' }">
                        <a>Se connecter</a>
                    </router-link>
                    <router-link tag="li" :to="{ name: 'auth.register' }">
                        <a>S'inscrire</a>
                    </router-link>
                </ul>
            </div>
        <div class="col-md-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
