require('dotenv').config()
require('./database')

const app = require('./app.js')

app.listen(process.env.APP_PORT)

console.log('Server on port', process.env.APP_PORT)
