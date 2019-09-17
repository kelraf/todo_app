<template>
    <div class="form-cont">
        <form>
            <input type="text" v-model="name" name="value" placeholder="Type In The Value">
            <input type="submit" value="Add" @click.prevent="submit">
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
    form {
        background: brown;
        margin: auto;
        color: white;
        width: 50%;
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        border-radius: 10px;
    }

    form input[type=text] {
        height: 25px;
        flex: 2;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        outline: none;
        border: none;
        padding-left: 3px;
        background: transparent;
    }

    form input[type=submit] {
        flex: 1;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        outline: none;
        border: none;
        cursor: pointer;
    }

    form input[type=submit]:hover {
        background: gray;
    }
</style>