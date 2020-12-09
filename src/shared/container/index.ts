import { container } from 'tsyringe';

import '@modules/users/helpers';
import './helpers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import IRentsRepository from '@modules/movies/repositories/IRentsRepository';
import RentsRepository from '@modules/movies/infra/typeorm/repositories/RentRepository';

import IMoviesRepository from '@modules/movies/repositories/IMoviesRepository';
import MoviesRepository from '@modules/movies/infra/typeorm/repositories/MovieRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
  // delay(() => UsersRepository),
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<IRentsRepository>(
  'RentsRepository',
  RentsRepository,
);

container.registerSingleton<IMoviesRepository>(
  'MoviesRepository',
  MoviesRepository,
);
