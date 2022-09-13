const express = require('express')
const app = express()

const server = app.listen(8080, () => console.log('server up!'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('views', './views')
app.set('view engine', 'ejs')

let users = []

app.get('/', (req, res) => {
    res.render('home', {
        users
    })
})

app.post('/users', (req, res) => {
    users.push(req.body)
    res.redirect('/')
  })
  

