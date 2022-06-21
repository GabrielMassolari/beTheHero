const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json()) // define a utilização do formato JSON
app.use(routes) // Usa as rotas declaradas no arquivo ROUTES.JS
app.use(errors())

app.listen(3333) 