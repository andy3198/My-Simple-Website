import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/signup",
        name: "Signup",
        component: () => import("../views/Signup.vue")
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: () => import("../views/Portfolio.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const authenticatedUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !authenticatedUser) {
        alert("You are not authorized to access this area.");
        next("login");
    } else {
        next();
    }
});

export default router;
