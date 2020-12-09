/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Rent from '../infra/typeorm/entities/Rent';
import IMoviesRepository from '../repositories/IMoviesRepository';
import IRentsRepository from '../repositories/IRentsRepository';

interface IRequest {
  movie_id: string;
  rent_id: string;
}

@injectable()
class ReturnMovieService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,

    @inject('RentsRepository')
    private rentRepository: IRentsRepository,
  ) {}

  public async execute({ movie_id, rent_id }: IRequest): Promise<Rent> {
    const movie = await this.moviesRepository.findById(movie_id);

    if (!movie) {
      throw new AppError('Movie not found');
    } else {
      movie.rented = false;
    }

    await this.moviesRepository.save(movie);

    const rent = await this.rentRepository.findById(rent_id);

    if (!rent) {
      throw new AppError('Rent not found');
    } else {
      rent.returned = true;
    }

    return rent;
  }
}

export default ReturnMovieService;
