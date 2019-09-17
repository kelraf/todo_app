<template>
    <div class="nav">
        <div class="inner-nav">
            <router-link to="/">Todos</router-link> |
            <router-link to="/users">Users</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
    .nav {
        background: red;
        height: 100px;
    }

    .inner-nav {
        background: gray;
        height: 80%;
        width: 50%;
        margin: auto;
    }
</style>