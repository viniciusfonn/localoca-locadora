import { container } from 'tsyringe';

import IMailHelper from './MailHelper/models/IMailHelper';
import EtherealMailHelper from './MailHelper/implementations/EtherealMailHelper';

import IMailTemplateHelper from './MailTemplateHelper/models/IMailTemplateHelper';
import handlebarsMailTemplateHelper from './MailTemplateHelper/implementations/HandlebarsMailTemplateHelper';

container.registerSingleton<IMailTemplateHelper>(
  'MailTemplateHelper',
  handlebarsMailTemplateHelper,
);

container.registerInstance<IMailHelper>(
  'IMailHelper',
  container.resolve(EtherealMailHelper),
);
