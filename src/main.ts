const express = require('express');
const app = express();

app.get('/', (req: any, res: any) => {
  res.json(usuarios);
})

app.post('/', (req: any, res: any) => {
  res.json(usuarios);
})

app.delete('/', (req: any, res: any) => {
  res.json(usuarios);
})

app.put('/', (req: any, res: any) => {
  res.json(usuarios);
})

app.listen(3000, () => console.log('Ready on port 3000!'));


