import {ping, getProjects, provideToken, userInfo, getEntities, getProject, deleteEntity, updateEntity, getProjectInfo} from './controller/MockController';

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
    },
    {
        path: '/entity/:id',
        method: 'delete',
        action: deleteEntity
    },
    {
        path: '/entity',
        method: 'post',
        action: updateEntity
    },
    {
        path: '/project/:id',
        method: 'get',
        action: getProjectInfo
    }
];

export default AppRoutes;
