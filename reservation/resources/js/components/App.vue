<template>
  <div id="appHome">
    <Loading :loading="isLoading"></Loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import {UserService} from '@/services';
  import Loading from "@/components/common/Loading";

  export default {
    name: 'App',
    data() {
      return {
        isLoading: false
      }
    },
    components: {
      Loading
    },
    created() {
      console.log(this.$store.getters.isLoading, '1111')
      this.isLoading = this.$store.getters.isLoading
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
