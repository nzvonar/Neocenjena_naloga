const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let results = [];

app.post("/submit", (req, res) => {
    const { player, correct } = req.body;
    results.push({ player, correct, timestamp: new Date() });
    res.json({ message: "Rezultat shranjen!" });
});

app.get("/results", (req, res) => {
    res.json(results);
});

app.listen(3000, () => console.log("Strežnik teče na portu 3000"));
