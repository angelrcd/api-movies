import express from "express"
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

app.post('/addMovie', (req: any, res: any) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(404).send("The json is empty");
  }

  if(!req.body.title){
    res.status(404).send("The title not is in the json")
  }

  if(!req.body.likes){
    const movie = {
      title: `${req.body.title}`,
      likes: "0"
    }
    movies.push(movie);
  }else{
    const movie = {
      title: `${req.body.title}`,
      likes: `${parseInt(req.body.likes)}`
    }
    movies.push(movie);
  }
  res.send(movies);
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

app.put('/addlike/:title', (req: any, res: any)=>{
  movies.forEach(movie => {
    if(movie.title === req.params.title){
      let likes: number = parseInt(movie.likes);
      likes++;
      movie.likes = String(likes);
    }
    res.json(movies);
  });
})

app.put('/unlike/:title', (req: any, res: any)=>{
  movies.forEach(movie => {
    if(movie.title === req.params.title){
      let likes: number = parseInt(movie.likes);
      likes--;
      movie.likes = String(likes);
    }
    res.json(movies);
  });
})


app.listen(3000, () => console.log('Ready on port 3000!'));


