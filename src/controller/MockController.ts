import { Request, Response } from 'express';
import { promises as fs } from 'fs';
import { Projects } from "../Types/projects";
import {IProjectConfig} from "api-builder-types";
import {projectConfig} from "../Helpers/ConfigBuilder";

/**
 * Loads all posts from the database.
 */
export const ping = async (request: Request, response: Response) => {
    response.json({
        Response: 'Server alive and working',
    });
};

export const provideToken = (request: Request, response: Response) => {
    request.user = {name: 'Jose Miguel'};
    response.json({userToken: 'Un token que la verdad no esperarías que fuera un token'});
    return Promise.resolve();
};

export const getProjects = async (request: Request, response: Response) => {
    const projectsJson = await readJson<Projects>('./src/ExampleConfigs/Projects.json');
    response.json(projectsJson.Projects);
};

export const getProject = async (request: Request, response: Response) => {
    response.json(projectConfig);
};

const readJson = async<T> (filePath: string): Promise<T> => {
    const rawData = await fs.readFile(filePath);
    const rawDataStringified = rawData.toString('utf-8');
    return JSON.parse(rawDataStringified);
};

export const userInfo = async (request: Request, response: Response) => {
    console.log(request.user);
    response.json(request.user);
};

export const getEntities = async (request: Request, response: Response) => {
    const entitiesJson = await readJson<IProjectConfig>('./src/ExampleConfigs/Entities.json');
    response.json(entitiesJson.Entities);
};
