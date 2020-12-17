import{ createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home       
        },
        {
            path: "/notfound",
            name: "NotFound",
            component: NotFound       
        },
        {
            path: "/shop",
            name: "Shop",
            component: Shop       
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact       
        },
    ]
})

export default router