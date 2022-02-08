const connection = require('mysql2-promise')();

connection.configure({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mvp'
});

module.exports = {
  getUsers: function () {
    const query = 'SELECT * FROM users';
    return connection.query(query);
  },
  newUser: function (name) {
    const query = 'INSERT INTO users (username) VALUES (?)'
    return connection.query(query, [name])
  },
  deleteUser: function (id) {
    const query = 'DELETE FROM users WHERE id = ?'
    return connection.query(query, [id])
  },
  getGoals: function (userid) {
    const query = 'SELECT * FROM goals WHERE userid = ?';
    return connection.query(query, [userid]);
  },
  newGoal: function ({ userid, goalName, frequency, lastComplete }) {
    const query = 'INSERT INTO goals (userid, goalName, frequency, lastComplete) VALUES (?, ?, ?, ?)';
    return connection.query(query, [ userid, goalName, frequency, lastComplete ]);
  },
  completeGoal: function (id) {
    const query = 'UPDATE goals SET lastComplete = date_format(current_timestamp, "%W, %b %D") WHERE id = ?';
    return connection.query(query, [id])
  },
  deleteGoal: function (id) {
    const query = 'DELETE FROM goals WHERE id =?';
    return connection.query(query, [id])
  }
}