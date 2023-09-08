import Main from "../components/Main";
import {createRouter, createWebHistory} from 'vue-router'
import ListEmployeers from "../components/ListEmployeers";

const routes = [
    {
        path: '/',
        component: Main
    }, {
        path: '/employees',
        component: ListEmployeers
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
