<template>
    <nav class="navigation">
        <router-link to="/">Main</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/faq">FAQ</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.navigation {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 200px;
}
</style>
