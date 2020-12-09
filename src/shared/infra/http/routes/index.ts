import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import rentRouter from '@modules/movies/infra/http/routes/rents.routes';
import movieRouter from '@modules/movies/infra/http/routes/movies.routes';

const routes = Router();

routes.use('/rent', rentRouter);
routes.use('/movies', movieRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
