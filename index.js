const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000

//static
app.use(express.static('public'));

//body parser
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('default route'))

//routes
const usersRoute = require('./routes/users');
app.use(usersRoute);

app.listen(port, () => {
  console.log('app is listening on:', port)
})