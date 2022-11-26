const author = "20127530 - Nguyễn Đinh Quang Khánh";
const title = "Jars Saving";

const showDefault = (req, res) => {
  const salary = Number(req.query.salary) || 0;
  const jar55 = (salary * 0.55).toFixed(2);
  const jar10 = (salary * 0.1).toFixed(2);
  const jar5 = (salary * 0.05).toFixed(2);
  res.render("task2", { author, title, jar55, jar10, jar5 });
};

module.exports = {
  showDefault,
};
