const express = require("express");
const app = express();
const courses = [
    { id: 1, name: "node" },
    { id: 2, name: "laravel" },
    { id: 3, name: "angular" },
]
app.get('/', (req, res) => {
    res.send("Hello iam Nagarajan....");
});
app.get('/courses', (req, res) => {
    res.send(courses);
});
app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id))
    if (course) {
        res.send(course);
    } else {
        res.send("fail");
    }
});
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`app Listening on ${port}`) })