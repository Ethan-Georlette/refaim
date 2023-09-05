
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Refaim } from "./pages/refaim";

const routes = [
    {
        path:'/',
        component: <Home/>,
    },
    {
        path:'/about',
        component: <About/>,
    },
    {
        path:'/refaim',
        component: <Refaim/>,
    },
]

export default routes;