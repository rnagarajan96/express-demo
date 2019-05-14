const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world...');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/courses/:date/:month/:year', (req, res) => {
    // res.send(req.params);
    res.send(req.query);
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
})