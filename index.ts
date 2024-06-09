import express from 'express';
import cors from 'cors';
import { getResponse } from './chatbot';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) => {
  const { message } = req.body;
  const response = getResponse(message);
  res.json({ response });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
