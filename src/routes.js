
import { About } from "./pages/about";
import { Home } from "./pages/home";

const routes = [
    {
        path:'/',
        component: <Home/>,
    },
    {
        path:'/about',
        component: <About/>,
    },
]

export default routes;