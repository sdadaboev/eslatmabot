import express from 'express'
const app = express()
const PORT = process.env.PORT
app.get('/', (req, res) => {
    res.send("Hello Lola")
})
app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`)
})