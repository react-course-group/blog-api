const cors = require('cors')
const wz = require('wajez-api')
const express = require('express')
const mongoose = require('mongoose')
const {seed} = require('wajez-utils')
const bodyParser = require('body-parser')

const routes = require('./routes')
const {Post, relations} = require('./models')

const app = express()
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.use(wz.router(routes))

app.use((err, req, res, next) => {
  res.status(500).json({error: err})
})

mongoose.connect('mongodb://mongo/blog', {useNewUrlParser: true})
.then(() => Post.remove({}))
.then(() => seed({Post: 50}, relations))
.then(() => app.listen(80))
.catch(console.error)
