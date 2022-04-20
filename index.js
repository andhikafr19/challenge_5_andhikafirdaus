const express = require('express')
const res = require('express/lib/response')
const app = express()
const posts = require('./database/post.json')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended:false}))

// chapter3
app.get('/', (req, res) => {
  res.render('chapter3')
})

// chapter4
app.get('/game', (req, res) =>{
  res.render('chapter4')
})

//Serving data user static ke bentuk json
app.get('/login', (req, res) =>{
  res.status(200).send(posts)
  // console.log('Data User');
})

//Create data user static untuk login di Backend
app.get('/api/v1/posts/:user', (req, res) =>{
  const post = posts.find(i => i.user == req.params.user)
  res.status(200).send(post)
})

// Open port
app.listen(5000, () =>{
  console.log('Server running on port 5000')
})