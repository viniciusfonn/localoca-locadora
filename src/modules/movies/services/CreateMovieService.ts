/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';

import Movie from '../infra/typeorm/entities/Movie';
import IMoviesRepository from '../repositories/IMoviesRepository';

interface IRequest {
  title: string;
  director: string;
  rented: boolean;
}

@injectable()
class CreateMovieService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  public async execute({ director, rented, title }: IRequest): Promise<Movie> {
    const movie = await this.moviesRepository.create({
      director,
      rented,
      title,
    });

    return movie;
  }
}

export default CreateMovieService;
