const express = require('express');
const app = express();

const movies = [
  {
    title: "peli1",
    likes: "0",
  }
]

app.get('/', (req: any, res: any) => {
  res.json(movies);
})

app.post('/', (req: any, res: any) => {
  res.json(movies);
})

app.delete('/', (req: any, res: any) => {
  res.json(movies);
})

app.put('/', (req: any, res: any) => {
  res.json(movies);
})

app.listen(3000, () => console.log('Ready on port 3000!'));


