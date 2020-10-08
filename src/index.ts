import "reflect-metadata";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import {AppRoutes} from "./routes";

// create connection with database
// note that it's not active database connection


// create express app
const app = express();
app.use(bodyParser.json());

// register all application routes
AppRoutes.forEach(route => {
    app[route.method](`/api${route.path}`, (request: Request, response: Response, next: Function) => {
        route.action(request, response)
            .then(() => next)
            .catch(err => next(err));
    });
});

// run app
app.listen(4000);

console.log("Express application is up and running on port 4000");
