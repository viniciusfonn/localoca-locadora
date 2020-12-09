/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';

import IMoviesRepository from '@modules/movies/repositories/IMoviesRepository';
import ICreateMovieDTO from '@modules/movies/dtos/ICreateMovieDTO';

import Movie from '../entities/Movie';

class MoviesRepository implements IMoviesRepository {
  private ormRepository: Repository<Movie>;

  constructor() {
    this.ormRepository = getRepository(Movie);
  }

  public async findByTitle(title: string): Promise<Movie | undefined> {
    const findMovie = await this.ormRepository.findOne({
      where: { title },
    });

    return findMovie;
  }

  public async findById(id: string): Promise<Movie | undefined> {
    const findMOvie = await this.ormRepository.findOne({
      where: { id },
    });

    return findMOvie;
  }

  public async create({
    director,
    rented,
    title,
  }: ICreateMovieDTO): Promise<Movie> {
    const movie = this.ormRepository.create({ rented, title, director });

    await this.ormRepository.save(movie);

    return movie;
  }

  public async listAllMovies(): Promise<Movie[]> {
    const movies = await this.ormRepository.find();

    return movies;
  }

  public async save(movie: Movie): Promise<Movie> {
    return this.ormRepository.save(movie);
  }
}

export default MoviesRepository;
