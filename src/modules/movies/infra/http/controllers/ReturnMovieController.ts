/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ReturnMovieService from '@modules/movies/services/ReturnMovieService';

export default class ReturnMovieController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { movie_id, rent_id } = request.body;

    const returnMovie = container.resolve(ReturnMovieService);

    const rent = await returnMovie.execute({ movie_id, rent_id });

    return response.json(rent);
  }
}
