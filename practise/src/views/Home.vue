<template>
  <div class="home">
    <Body msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Body from '@/components/Body.vue'

export default {
  name: 'home',
  components: {
    Body
  }
}
</script>
