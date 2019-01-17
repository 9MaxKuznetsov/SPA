<template>
    <div class="main">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>I am 'About' page! '/about'</h1>
    </div>
</template>

<script>
export default {
    beforeRouteLeave (to, from, next) {
        const answer = window.confirm('Do you really want to leave?')

        if (answer) {
            next()
        } else {
            next (false)
        }
    }
}
</script>

