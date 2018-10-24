const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('recommended_products', 'nathan', 'student', {
  host: 'localhost',
  dialect: 'postgres'
});

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database: ', err);
      res.status(500).send();
    });
    sequelize.query('SELECT * FROM products', {type: sequelize.QueryTypes.SELECT})
    .then(data => {
      res.status(200).send(JSON.stringify(data));
    })
    .catch(err => {
      if (err) throw err;
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});