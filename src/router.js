import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from "./views/home/home.vue"
import Friend from "./views/friends/friend.vue"
import Search from "./views/search/search.vue"
import Cart from "./views/cart/cart.vue"
import newslist from "./views/home/newList/newlist.vue"
import newinfo from "./views/home/newList/newInfo/newinfo.vue"
import photolist from "./views/home/photo/photolist.vue"
export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: '/home', component: Home },
    { path: "/home/newslist", component: newslist },
    { path: "/home/newinfo/:id", component: newinfo },
    { path: "/home/photolist", component: photolist },
    { path: '/friend', component: Friend },
    { path: "/search", component: Search },
    { path: "/cart", component: Cart }
  ]
});
