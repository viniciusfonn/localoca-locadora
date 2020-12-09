import Movie from '../infra/typeorm/entities/Movie';
import ICreateMovieDTO from '../dtos/ICreateMovieDTO';

export default interface IMoviesRepository {
  create(data: ICreateMovieDTO): Promise<Movie>;
  findByTitle(title: string): Promise<Movie | undefined>;
  findById(id: string): Promise<Movie | undefined>;
  listAllMovies(): Promise<Movie[]>;
  save(movie: Movie): Promise<Movie>;
}
