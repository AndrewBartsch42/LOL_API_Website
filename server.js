const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/champion/:championSelector.json", async (req, res) => {
    try {
        const { championSelector } = req.params;
        console.log(championSelector);
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/16.8.1/data/en_US/champion/${championSelector}.json`);
        if (!response.ok){
            return res.status(404).json({ error: "Champion not found"})
        }
        const data = await response.json();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error)
    }
});

app.listen(3000, () =>{
    console.log("Server running on http://localhost:3000");
})