import { Request, Response } from "express";
import { Project } from "api-builder-types";
import { FileReaderToJson } from "../Helpers/MethodHelpers";
import {error} from "util";

const fs = require("fs").promises;

/**
 * Loads all posts from the database.
 */
export const ping = async (request: Request, response: Response) => {
    response.setHeader('Content-type', 'application/json');
    response.send(JSON.stringify({
        Response: "Server alive and working"
    }));
};

export const getProjects = async (request: Request, response: Response) => {
    response.setHeader('Content-type', 'application/json');
    await fs.readFile('./src/ExampleConfigs/Projects.json').then((rawData: Buffer) => {
        const rawDataString = rawData.toString();
        const jsonToSend = JSON.parse(rawDataString);
        response.send(jsonToSend);
    }).catch((error) => {
        const jsonToSend = JSON.stringify({ "ERROR": error});
        response.status(500).send(jsonToSend);
    });
};