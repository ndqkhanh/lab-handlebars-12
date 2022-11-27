const { categories, products } = require("../models/data");
const author = "20127056 - Võ Duy Nhân";
const title = "TV Sales";

const showDefault = (req, res) => {
  const id = req.query.id;
  let productsRender = [];
  if (id) {
    productsRender = products.filter((product) => product.category == id);
  } else productsRender = products;

  res.render("task3", { author, title, categories, productsRender });
};

module.exports = {
  showDefault,
};
