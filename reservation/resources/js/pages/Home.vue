<template>
  <div>
    <Comp-Header/>
    <Comp-Container />
  </div>
</template>

<script>
import CompContainer from './home/CompContainer.vue'
import CompHeader from './home/CompHeader.vue'
import CompFooter from './home/CompFooter.vue'
  export default {
  components: { CompHeader, CompContainer,CompFooter },
    name: "Home"
  }
</script>

<style scoped>

</style>
