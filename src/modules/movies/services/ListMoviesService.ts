/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';

import IMoviesRepository from '@modules/movies/repositories/IMoviesRepository';
import Movie from '../infra/typeorm/entities/Movie';

@injectable()
class ListMoviesService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  public async execute(): Promise<Movie[]> {
    const movies = await this.moviesRepository.listAllMovies();

    return movies;
  }
}

export default ListMoviesService;
