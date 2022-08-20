<template>
  <div id="appHome">
    <router-view></router-view>
  </div>
</template>

<script>
  import {UserService} from '@/services';

  export default {
    name: 'App',
    data() {
      return {}
    },
    created() {
      if (!this.$store.getters.getUser) {
        this.getUser()
      }
    },
    methods: {
      getUser() {
        UserService.getUser().then(response => {
          this.$store.dispatch('actionSetUser', response.data)
        }).catch(errors => {
        })
      }
    }
  }
</script>

<style scoped>
</style>
