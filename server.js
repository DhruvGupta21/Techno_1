const express = require('express')
const cors = require('cors')

const app = express()
var corOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require('./routes/productRouter.js')
app.use('/api/router', router)

app.get('/', (req, res) => {
    res.json({ message: 'hello' })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('server is running on port ${PORT}')
})