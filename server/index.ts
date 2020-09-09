import express from 'express';
import * as http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { MikroORM, EntityManager } from 'mikro-orm';
import 'reflect-metadata';

import { CommonRoutesConfig } from './common/common.routes.config';

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
};
const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;
const routes: any = [];
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

(async () => {
  DI.orm = await MikroORM.init();
  DI.em = DI.orm.em;
  app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at port ${port}`);
  });
  app.get('/:shortURL', (req: express.Request, res: express.Response) => {
    res.status(200).json({ shorturl: req.params.shortURL });
  });

  server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
      console.log(`Routes configured for ${route.getName()}`);
    });
  });
})();
