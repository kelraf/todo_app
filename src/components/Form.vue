<template>
    <div class="form-cont">
        <form v-if="add">
            <input type="text" v-model="desc" name="desc" placeholder="Please Type In Your Todo">
            <input type="submit" value="Add" @click.prevent="submit(true)">
        </form>

         <form v-else>
            <input type="button" class="forget" value="X" @click="forget">
            <input type="text" v-model="desc" name="desc" placeholder="Please Update Your Todo">
            <input type="button" value="Update" @click="submit(false)">
        </form>

    </div>
</template>


<script>
export default {
    name: "form",
    props: ["add_form", "desc_before", "todo_id"],
    data() {
        return {
            desc: this.desc_before || "",
            add: this.add_form
        }
    },
    watch: {
        add_form: {
            immediate: true,
            handler (new_one, old) {
                this.add = new_one || !this.add;
            }
        },
        desc_before: {
            immediate: true,
            handler (new_one, old) {
                this.desc = new_one;
            }
        }
    },
    methods: {
        submit(add) {
            if(add) {
                this.$emit("add-todo", this.desc)
                this.desc = ""
            } else {
                let obj = {todo_id: this.todo_id, desc: this.desc}
                this.$emit("update-todo", obj)
                this.desc = ""
                this.add = true
            }
        },
        forget() {
            this.desc = ""
            this.add = true
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
        flex: 5;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        outline: none;
        border: none;
        padding-left: 3px;
        background: transparent;
    }

    form input[type=button] {
        flex: 1;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        outline: none;
        border: none;
        cursor: pointer;
    }

    form input[type=button]:hover {
        background: gray;
    }

    /* FOR ADD BTN */
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

    .forget {
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
</style>