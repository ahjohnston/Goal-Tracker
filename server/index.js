const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const database = require('./database.js');

app.use(express.static('client/dist'));

//USER endpoints
app.get('/users', function (req, res) {
  database.getUsers()
    .then((result) => {
      res.send(result[0])
    })
    .catch((err) => {
      res.send(err)
    });
})

app.post('/users', function (req, res) {
  console.log(req.query)
  database.newUser(req.query.name)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err)
    });
})

//future development
// app.delete('/users', function (req, res) {
//   res.send('delete user')
// })

//GOALS endpoints
app.get('/goals', function (req, res) {
  database.getGoals(req.query.id)
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.post('/goals', function (req, res) {
  database.newGoal(req.query)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.put('/goals', function (req, res) {
  database.completeGoal(req.query.id)
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.send(err)
  })
})

app.delete('/goals', function (req, res) {
  database.deleteGoal(req.query.id)
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.send(err)
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})