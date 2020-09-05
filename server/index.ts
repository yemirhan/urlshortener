import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({
    message: 'this is a test message',
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
