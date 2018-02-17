const express = require('express')
const app = express()


const path = require('path')
const PORT = process.env.PORT || 3000

// app.use(express.static('dist'))

app.use(
    express.static(
        path.join(__dirname, '/dist')
    )
)

// takes all routes and puts them to our index file
app.get('*', (req, res) => {
    const dist = path.join(
        __dirname, '/index.html'
    )
    res.sendFile(dist)
})

app.listen(PORT, () => console.log('Example app listening on port ' + PORT + '!'))