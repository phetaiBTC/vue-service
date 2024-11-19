// import { authGuard } from 'src/common/guards/auth.guard';
import { authGuard } from '../common/guards/auth.guard'; // adjust the path as necessary
import HelloWorld from '@/components/HelloWorld.vue';
import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Homepage.vue";
import { userRoute } from "../views/module/users/router";
import login from "../views/module/login.vue";
const routes = [
    {
        path: "/admin",
        children: [
            { path: "home", name: "home", component: Homepage },
            { 
                path: "helloworld",
                name: "helloworld",
                component: HelloWorld,
                meta:{
                    skipAuthCheck:true
                }
            },
            { path: "login", name: "login", component: login },
            ...userRoute
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

authGuard(router);

export default router;