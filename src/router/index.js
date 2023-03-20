// import React from "react";
import { Redirect } from "react-router-dom";

import HJWDiscover from "../pages/discover";
import HJWMyRecommend from "../pages/myrecommend";
import HJWRanking from "../pages/ranking";
import HJWPlayer from "../pages/player";


const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="discover" />//redirect重定向

        )
    },
    {
        path: "/discover",
        exact: true,
        component: HJWDiscover
    },
    {
        path: "/myrecommend",
        component: HJWMyRecommend
    },
    {
        path: "/ranking",
        component: HJWRanking
    },
    {
        path: "/player",
        component: HJWPlayer
    }
];
export default routes;