import { User, ShortURL } from './entities';
require('dotenv').config();

export default {
  type: 'postgresql',
  entities: [User, ShortURL],
  clientUrl: process.env.SERVER_URL,
  debug: true,
};
