<template>
    <div>
        <h1>Hi! This is Dynamic route, and it's path is:</h1>
        <h2>{{ getRoute }}</h2>
    </div>
</template>

<script>
export default {
  computed: {
      getRoute() {
          return this.$route.path;
      }
  },
  created() {
      setTimeout(() => {
          this.$router.push('/about')
      }, 2500)
  }
}
</script>

<style>

</style>
