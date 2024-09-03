import express from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.listen(port)

app.post('/user', async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  });
  res.status(201).json({"menssage": "success"});
})

app.get('/user', async (_req, res) => {

  const users = await prisma.user.findMany()

  res.status(201).json(users);
});

app.delete('/user/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  })

  res.status(204).json({"menssage": "ok"});
});