const express = require('express')
const app = express()


const path = require('path')


app.use(express.static('simple-dist'))

// takes all routes and puts them to our index file
app.get('*', (req, res) => {
    const dist = path.join(
        __dirname, '/index.html'
    )
    res.sendFile(dist)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))