import Rent from '../infra/typeorm/entities/Rent';
import IRentMovieDTO from '../dtos/IRentMovieDTO';

export default interface IRentsRepository {
  create(data: IRentMovieDTO): Promise<Rent>;
  listAllRents(): Promise<Rent[]>;
  save(rent: Rent): Promise<Rent>;
  findById(id: string): Promise<Rent | undefined>;
}
