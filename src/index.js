"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
// create connection with database
// note that it's not active database connection
// create express app
const app = express();
app.use(bodyParser.json());
// register all application routes
routes_1.AppRoutes.forEach(route => {
    app[route.method](route.path, (request, response, next) => {
        route.action(request, response)
            .then(() => next)
            .catch(err => next(err));
    });
});
// run app
app.listen(3000);
console.log("Express application is up and running on port 3000");
//# sourceMappingURL=index.js.map