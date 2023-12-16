const express = require('express')
const db = require('./database/index.js')
const routes = require("./routers/routes")
const PORT = 3000
const app = express()
const cors =require('cors')
app.use(express.json());
app.use(express.static(__dirname + '/../front/front-end/public'))
app.use("/api/users",routes)
app.use(cors())
app.use("/api",routes)
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})