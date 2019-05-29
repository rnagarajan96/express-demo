const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello iam Nagarajan....");
});
app.get('/:event/:sport', (req, res) => {
    res.send(`Event >>>>${req.params.event} >>>> Sport >>>>${req.params.sport}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`app Listening on ${port}`) })