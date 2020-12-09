/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';

import IMoviesRepository from '@modules/movies/repositories/IMoviesRepository';
import AppError from '@shared/errors/AppError';
import Movie from '../infra/typeorm/entities/Movie';

@injectable()
class SearchMovieByTitleService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  public async execute(title: string): Promise<Movie | AppError> {
    const movie = await this.moviesRepository.findByTitle(title);

    if (!movie) {
      throw new AppError('Movie not foud');
    } else {
      return movie;
    }
  }
}

export default SearchMovieByTitleService;
