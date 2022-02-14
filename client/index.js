import express from 'express';

const app = express();
app.use(express.json());

const users = [
    {
        id: "1",
        user: "john"
    }
];

app.post("/api/login", (req, res) => {
    res.json('hey its works')
});

app.listen(5000, () => console.log('Server runing on port'));