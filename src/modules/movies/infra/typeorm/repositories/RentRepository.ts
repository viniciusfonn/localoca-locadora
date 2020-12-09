/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';

import IRentsRepository from '@modules/movies/repositories/IRentsRepository';
import IRentMovieDTO from '@modules/movies/dtos/IRentMovieDTO';
import Rent from '../entities/Rent';

class RentsRepository implements IRentsRepository {
  private ormRepository: Repository<Rent>;

  constructor() {
    this.ormRepository = getRepository(Rent);
  }

  public async create({ movie_id, user_id }: IRentMovieDTO): Promise<Rent> {
    const rent = this.ormRepository.create({
      movie_id,
      user_id,
      returned: false,
    });

    await this.ormRepository.save(rent);

    return rent;
  }

  public async listAllRents(): Promise<Rent[]> {
    const rents = await this.ormRepository.find();

    return rents;
  }

  public async save(rent: Rent): Promise<Rent> {
    return this.ormRepository.save(rent);
  }

  public async findById(id: string): Promise<Rent | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return user;
  }
}

export default RentsRepository;
