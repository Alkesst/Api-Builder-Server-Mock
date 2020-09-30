import {Request, Response} from "express"

/**
 * Loads all posts from the database.
 */
export async function pingController(request: Request, response: Response) {

    response.setHeader('Content-type', 'application/json');
    response.send(JSON.stringify({
        Response: "Server alive and working"
    }));
}