<template>
    <div class="container-fluid text-center">
        <div class="text-warning mb-3">
            <icon name="warning" width="100" height="100" style="color: orange;" />
        </div>
        <div class="mb-3">
            <h4>Page not found</h4>
            <p>The page you were looking for couldn't be found.</p>
        </div>

        <a href="/overview" class="btn btn-dark">back to dashboard</a>
    </div>
</template>

<script>
    import '../../icons/warning'
    export default {
        name: "not-found"
    }
</script>

<style scoped>

</style>