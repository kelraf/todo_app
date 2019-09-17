import Vue from 'vue'
import Router from 'vue-router'
import Todos from './views/Todos.vue'
import Users from './views/Users.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'todos',
            component: Todos
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        }
    ]
})