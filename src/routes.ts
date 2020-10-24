import {ping, getProjects, provideToken} from './controller/MockController';

/**
 * All application routes.
 */
const AppRoutes = [
    {
        path: '/ping',
        method: 'get',
        action: ping,
    },
    {
        path: '/projects',
        method: 'get',
        action: getProjects,
    },
    {
        path: '/token/get',
        method: 'post',
        action: provideToken
    }
];

export default AppRoutes;
