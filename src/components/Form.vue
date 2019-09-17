<template>
    <div class="form-cont">
        <form>
            <input type="text" v-model="name" name="value" placeholder="Type In The Value">
            <input type="submit" @click.prevent="submit">
        </form>
        <h2> {{ name }} </h2>
    </div>
</template>


<script>
export default {
    name: "form",
    components: {

    },
    data() {
        return {
            name: ""
        }
    },
    methods: {
        submit() {
            alert("Success")
        }
    }    
}
</script>


<style scoped>

</style>