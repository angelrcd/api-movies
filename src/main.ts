const express = require('express');
const app = express();

app.get('/', (req: any, res: any) => res.send('Hello World!'));

app.listen(3000, () => console.log('Ready on port 3000!'));
