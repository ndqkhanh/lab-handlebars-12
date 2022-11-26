const { zodiacs } = require('../models/data');
const author = '20127118 - Nguyễn Phúc Bảo';

const renderList = (req, res) => {
  res.render('task4', {
    zodiacs,
    title: 'Zodiacs',
    author,
  });
};
const renderDetails = (req, res) => {
  res.render('task4-details', {
    zodiac: zodiacs.find(
      (item) => item.name.toLowerCase() == req.params.name.toLowerCase()
    ),
    title: 'Zodiac Description',
    author,
  });
};
module.exports = {
  renderList,
  renderDetails,
};
