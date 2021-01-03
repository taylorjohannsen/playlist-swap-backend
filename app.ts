import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import index from './routes/index'

const app: Application = express()

// CORS Setup
app.use(cors())

// Body Parsing
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Routes
app.use('/', index)

// Server Start
app.listen(process.env.PORT, () => console.log('Listenting on port: ' + process.env.PORT))