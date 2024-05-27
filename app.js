const express = require("express");
const app = express();
const postsControllers = require("./controllers/posts.js")

app.get('/', (req, res) => {
    res.send(`<h1>Benvenuto nel mio blog!</h1>`);
})

app.get('/posts', postsControllers.index);
app.post('/posts', postsControllers.add);

app.listen(3000, () => {
    console.log('Server attivo sulla porta http://localhost:3000.');
})