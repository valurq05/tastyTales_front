import{createRouter, createWebHistory} from"vue-router";
import LoginView from "../views/loginView.vue";
import LandingView from "../views/landingView.vue";
import RegisterView from "../views/registerView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path:"/",
        name:"home",
        component:LandingView
    },
    {
        path:"/login",
        name:"login",
        component:LoginView
    },
    {
        path:"/register",
        name:"register",
        component:RegisterView
    },
]
})

export default router;