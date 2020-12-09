/* eslint-disable camelcase */
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import MoviesController from '../controllers/MoviesController';

const movieRouter = Router();
const movieController = new MoviesController();

movieRouter.use(ensureAuthenticated);

movieRouter.get('/', movieController.index);

movieRouter.get('/show/', movieController.show);

export default movieRouter;
