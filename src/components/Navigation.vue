<template>
    <div class="nav">
        <div class="inner-nav">
            <router-link class="link" to="/">Todos</router-link> |
            <router-link class="link" to="/users">Users</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
    .nav {
        background: black;
        height: auto;
    }

    .inner-nav {
        /* background: gray; */
        width: 50%;
        margin: auto;
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: center;
        color: white;
    }

    .link {
        color: white;
        text-decoration: none;
    }

    .link:hover {
        
    }
</style>