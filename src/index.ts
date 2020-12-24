import 'reflect-metadata';
import { Request, Response } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import AppRoutes from './routes';
import * as passport from "passport";
import * as session from 'express-session';
const MockStrategy = require('passport-mock-strategy');

// create express app
const app = express();

passport.use(new MockStrategy.MockStrategy({
    name: 'LoginMock',
    user: {
        id: '499bcf47-eec0-46ea-bade-a4622a1e8507',
        name: {
            familyName: 'Jose Miguel',
            givenName: 'Josep Miquel'
        },
        emails: [{value: 'a@a.com', type: null}],
        provider: 'yo'
    }
}));

MockStrategy.setupSerializeAndDeserialize(passport, null, (id, done) => {
    return null;
});

app.use(bodyParser.json());
app.use(session({secret: 'Jose'}));
MockStrategy.connectPassport(app, passport);

app.get('/api/login', passport.authenticate('LoginMock', {session: true}), (req, res) => {
    res.json({token: 'Tolkien inesperado?'});
});

// register all application routes
AppRoutes.forEach((route) => {
    app[route.method](`/api${route.path}`, (request: Request, response: Response, next: Function) => {
        route.action(request, response)
            .then(() => next)
            .catch((err) => next(err));
    });
});

// run app
app.listen(4000);

console.log('Express application is up and running on port 4000');
