import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API RUNNING');
});

app.listen(port)


app.post('/api', async (req, res) => {

  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })


  res.status(200).send(req.body);

})

