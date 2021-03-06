import Vue from "vue"; 
import VueRouter from "vue-router";

Vue.use(VueRouter);

//tutte le rotte ora passano di qua
import Home from "./pages/Home";
import PostHome from "./pages/PostHome";
import About from "./pages/About";
import Contatti from "./pages/Contatti";
import SinglePost from "./pages/SinglePost";
import PageNotFound from "./pages/PageNotFound";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/post",
            name: "post-home",
            component: PostHome
        },
        {
            path: "/chi-siamo",
            name: "about",
            component: About
        },
        {
            path: "/contatti",
            name: "contatti",
            component: Contatti
        },
        {
            path: "/posts/:slug",
            name: "single-post",
            component: SinglePost
        },
        {
            path: '*',
            name: "page-404",
            component: PageNotFound
        }
    ]
});

export default router