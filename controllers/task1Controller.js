const { emotions } = require("../models/data");
const author = "20127027 - Nguyễn Thanh Hoàng";
const title = "Inspiring Quotes";

const showDefault = (req, res) => {
  let reqTitle = req.params.title || "";
  let quotePath =
    emotions.find((item) => item.title.toLowerCase() == reqTitle.toLowerCase())
      ?.quotePath || "images/task1/happy/happy1.jpg";
  res.render("task1", { author, title, emotions, quotePath });
};

module.exports = {
  showDefault,
};
