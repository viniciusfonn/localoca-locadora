/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RentMovieService from '@modules/movies/services/RentMovieService';

export default class RentMovieController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.body;
    const user_id = request.user.id;

    const rentMovie = container.resolve(RentMovieService);

    const rent = await rentMovie.execute({ movie_id, user_id });

    return response.json(rent);
  }
}
