const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../react-client/dist'));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});