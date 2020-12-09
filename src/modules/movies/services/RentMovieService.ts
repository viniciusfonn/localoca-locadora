/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Rent from '../infra/typeorm/entities/Rent';
import IMoviesRepository from '../repositories/IMoviesRepository';
import IRentsRepository from '../repositories/IRentsRepository';

interface IRequest {
  movie_id: string;
  user_id: string;
}

@injectable()
class RentMovieService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,

    @inject('RentsRepository')
    private rentRepository: IRentsRepository,
  ) {}

  public async execute({ movie_id, user_id }: IRequest): Promise<Rent> {
    const movie = await this.moviesRepository.findById(movie_id);

    if (!movie) {
      throw new AppError('Movie not found');
    } else {
      movie.rented = true;
    }

    await this.moviesRepository.save(movie);

    const rent = await this.rentRepository.create({ movie_id, user_id });

    await this.rentRepository.save(rent);

    return rent;
  }
}

export default RentMovieService;
