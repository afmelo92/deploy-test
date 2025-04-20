import 'dotenv/config';
import express, { Express } from 'express';

const app: Express = express();
const port: number = Number(process.env.PORT) || 8080;

app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.json({
    message: `Welcome to the new deploy in ${process.env.NODE_ENV}`,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
