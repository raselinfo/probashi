require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

app.get("/health", (_req, res) => {
    res.send("<h1>OK</h1>")
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})