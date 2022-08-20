<template>
  <div class="wrapper">
    <Header></Header>
    <section class="vh-100">
      Profile
      <br>
      Name: {{$store.getters.getUser?.name}}
      <br>
      Address {{$store.getters.getUser?.address}}
    </section>
  </div>
</template>

<script>
import Header from "@/components/header/Header"

export default {
  name: "Login",
  components: {Header},
  data() {
    return {

    }
  },


}
</script>

