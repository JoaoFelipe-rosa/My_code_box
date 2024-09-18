import express from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.listen(port)


// USER API
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





// TRAIN API
app.post('/exercise', async (req, res) => {
  await prisma.exercise.create({
    data: {
      exerciseName: req.body.exerciseName,
      repetition: req.body.repetition,
      repetitionAmount: req.body.repetitionAmount,
      sex: req.body.sex,
      type: req.body.type,
      img: req.body.img
    }
  });
  res.status(201).json({ "menssage": "Exercise registered successfully"});
})

app.get('/exercise', async (_req, res) => {

  const exercise = await prisma.exercise.findMany()

  res.status(201).json(exercise);
});

app.get('/user/:id', async (req, res) => {
  try {
    // Buscar usuário pelo ID
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });

    // Verifica se o usuário existe
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    // Retorna todas as informações do usuário
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age, // ou outro campo que queira retornar
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar o usuário.' });
  }
});

