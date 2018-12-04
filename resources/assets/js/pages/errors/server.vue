<template>
    <div class="container-fluid text-center">
        <div class="text-warning mb-3">
            <icon name="warning" width="100" height="100" style="color: orange;" />
        </div>
        <div class="mb-3">
            <h4>Service Unavailable</h4>
            <p>We've not been able to complete your action, please go back and try again.</p>
        </div>

        <a href="/overview" class="btn btn-dark">back to dashboard</a>
    </div>
</template>

<script>
    import '../../icons/warning'
    export default {
        name: "server"
    }
</script>

<style scoped>

</style>