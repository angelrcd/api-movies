import express from "express";
import { runInNewContext } from "vm";
const app = express();
app.use(express.json());

const movies = [
  {
    title: "peli1",
    likes: "0",
  }
]

app.get('/', (req: any, res: any) => {
  res.json(movies);
})

app.post('/addMovie', (req: any, res: any) => {
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

app.patch('/', (req: any, res: any) => {
  res.json(movies);
})

app.listen(3000, () => console.log('Ready on port 3000!'));


