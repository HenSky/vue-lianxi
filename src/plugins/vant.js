import Vue from 'vue'
import {
    Tabbar,
    TabbarItem,
    NavBar,
    Button,
    Swipe,
    SwipeItem,
    Toast,
    Grid,
    GridItem,
    Image,
    Card,
    Tab,
    Tabs
} from 'vant'


Vue.use(Button)
    .use(Tabbar)
    .use(TabbarItem)
    .use(NavBar)
    .use(Swipe)
    .use(SwipeItem)
    .use(Toast)
    .use(Grid)
    .use(GridItem)
    .use(Image)
    .use(Card)
    .use(Tab)
    .use(Tabs);


Vue.prototype.$Toast = Toast;
