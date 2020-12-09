/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListMoviesService from '@modules/movies/services/ListMoviesService';
import SearchMovieByTitleService from '@modules/movies/services/SearchMovieByTitleService';

export default class MoviesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listMovies = container.resolve(ListMoviesService);

    const movies = await listMovies.execute();

    return response.json(movies);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const searchMovie = container.resolve(SearchMovieByTitleService);

    const movie = await searchMovie.execute(title);

    return response.json(movie);
  }
}
