import {ping, getProjects, provideToken, userInfo, getEntities, getProject} from './controller/MockController';

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
    }, {
        path: '/users/info',
        method: 'get',
        action: userInfo
    },
    {
        path: '/projectConfig',
        method: 'get',
        action: getEntities
    },
    {
        path: '/projectConfig/:id',
        method: 'get',
        action: getProject
    }
];

export default AppRoutes;
