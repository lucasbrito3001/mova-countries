import Vue from 'vue'
import VueRouter from 'vue-router'
import Screen1 from './views/Screen1/ContentScreen1'
import Screen2 from './views/Screen2/ContentScreen2'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'first-screen',
            component: Screen1 
        },
        {
            path: '/selectedFlag',
            name: 'second-screen',
            component: Screen2
        }
    ]
})