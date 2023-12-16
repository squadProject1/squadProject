const express = require('express')
const db = require('./database/index.js')
const routes = require("./routers/routes")
const PORT = 3001
const app = express()
const cors =require('cors')
app.use(express.json());
app.use(express.static(__dirname + '/../front/front-end/public'))

app.use(cors())
app.use("/api",routes)
app.get('/zako',(req,res)=>res.send('hello zako wasa3 belek!'))
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})