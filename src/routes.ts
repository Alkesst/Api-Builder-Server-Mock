import { ping, getProjects } from "./controller/MockController";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/ping",
        method: "get",
        action: ping
    },
    {
        path: "/projects",
        method: "get",
        action: getProjects
    }
];