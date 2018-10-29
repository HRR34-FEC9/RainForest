const Sequelize = require('sequelize');
const loremIpsum = require('./MOCK_DATA.json');
const { urls } = require('./IMAGE_URLS.json');

const sequelize = new Sequelize('recommended_products', 'nathan', 'student', {
  host: 'localhost',
  dialect: 'postgres'
});

function genData() {
  for (let i = 0; i < urls.length; i++) {
    let {short_desc, rating, reviews, price} = loremIpsum[i];
    sequelize.query(
      `INSERT INTO products (short_desc, image_url, rating, reviews, price, category, purchase_url) VALUES ('${short_desc}', '${urls[i]}', '${rating}', '${reviews}', '${price}', 'Electronics', '${urls[i]}')`,
      {type: sequelize.QueryTypes.INSERT}
    );
  }
};

genData();