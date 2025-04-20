import 'dotenv/config';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

const port: number = Number(process.env.PORT as string) || 8080;

app.use(express.json());

// Rotas
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: `Welcome to the new deploy in ${process.env.NODE_ENV as string}`,
  });
});

// Rotas
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: `Welcome to the new deploy in ${process.env.NODE_ENV as string}`,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
