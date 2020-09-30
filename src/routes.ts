import {pingController} from "./controller/PingController";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/ping",
        method: "get",
        action: pingController
    }
];