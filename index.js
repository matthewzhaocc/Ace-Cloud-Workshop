const express = require("express")

app = express()

app.get("/", async (req, res) => {
    await res.send("hello")
})

app.get("/health", async (req, res) => {
    await res.send("healthy")
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`listening on port ${process.env.PORT || 8080}`)
})