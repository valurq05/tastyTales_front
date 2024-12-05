import{createRouter, createWebHistory} from"vue-router";
import LoginView from "../views/loginView.vue";
import LandingView from "../views/landingView.vue";
import RegisterView from "../views/registerView.vue";
import UserHomeView from "../views/userHomeView.vue";
import { useAuthStore } from '../stores/authStore.js'
import RecipesView from "../views/recipesView.vue";
import RecipeDetailView from "../views/recipeDetailView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          component: () => import('../components/layout/defaultLayoutComponent.vue'),
          children: [
            {
                path:"/",
                name:"landing",
                component: LandingView
                },
                {
                path:"/login",
                name:"login",
                component: LoginView
                },
                {
                path:"/register",
                name:"register",
                component: RegisterView
                },
                {
                path:"/recipes",
                name:"recipes",
                component: RecipesView
                },
                {
                path:"/recipe/:id",
                name:"recipeDetails",
                component: RecipeDetailView
                }
                    ]
        },
        {
        path: '/protected',
        component: () => import('../components/layout/protectedLayoutComponent.vue'),
        meta: {
          auth: true
        },
        children: [
            {
                path:"/home",
                name:"home",
                component: UserHomeView,
                meta: {
                    auth: true
                  }
            }
        ]
        }
    ]
})


router.beforeEach(async (to, from, next) => {
    const requiredAuth = to.meta.auth;
    const UserStore = useAuthStore();
    const localStorageToken = localStorage.getItem("Token");
    if (localStorageToken) {
      UserStore.token = localStorageToken;
    }
    if (UserStore.token) {
          return next();
    }

    if (requiredAuth) {
      return next("/");
    }
    
    return next();
});  

export default router;