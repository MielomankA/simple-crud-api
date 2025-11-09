import express from 'express';
import { router } from './routes/users.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
