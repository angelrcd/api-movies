const express = require('express');
const app = express();
app.use(express.json())

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

app.delete('/deleteMovie/:title', (req: any, res: any) => {
  const movie = req.params.title;
  movies.map((value, index: number) =>{
    if (value.title == movie){
      movies.splice(index,1);
      res.status(200).json(movies);
    }
  });
  return;
})

app.put('/', (req: any, res: any) => {
  res.json(movies);
})

app.listen(3000, () => console.log('Ready on port 3000!'));


