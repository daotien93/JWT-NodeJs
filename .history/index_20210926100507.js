const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())

// use dotenv connect config
require.config('dotenv')

const users = [
    {
        id: 1,
        username: 'Van Tien'
    },
    {
        id: 2,
        username: 'Hung'
    }
]
// Post
app.get('/posts', (req, res) => {
    res.json({post: 'my post'})
})

app.post('/login', (req, res) => {
    // Get  value when user enter  pass to req
    const username = req.body.username
    // Find user  && Check user pass username
    const user = users.find(user => user.username)
    console.log(user)


})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server stared is ${PORT}`)
})