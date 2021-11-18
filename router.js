import {createRouter,createWebHistory} from 'vue-router'
// const Home = {template: '<div>Home</div>'}
const About = import('./src/components/HelloWorld.vue')
const Home = import('./src/Home.vue')

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export {router}