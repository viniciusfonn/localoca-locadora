/* eslint-disable camelcase */
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import RentMovieController from '../controllers/RentMovieController';

import ReturnMovieController from '../controllers/ReturnMovieController';

const rentRouter = Router();
const rentMovieController = new RentMovieController();

const returnMovieController = new ReturnMovieController();

rentRouter.use(ensureAuthenticated);

rentRouter.post('/return/', returnMovieController.create);

rentRouter.post('/', rentMovieController.create);

// rentRouter.post('/return', returnMovieController.create);

export default rentRouter;
