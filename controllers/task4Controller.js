const { zodiacs } = require("../models/data");

const renderList = (req, res) => {
  res.render("task4", {
    zodiacs,
  });
};
const renderDetails = (req, res) => {
  res.render("task4-details", {
    zodiac: zodiacs.find(
      (item) => item.name.toLowerCase() == req.params.name.toLowerCase()
    ),
  });
};
module.exports = {
  renderList,
  renderDetails,
};
