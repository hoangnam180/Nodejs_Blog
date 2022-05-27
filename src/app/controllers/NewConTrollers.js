class NewControllers {
  //[GET] /new
  index = (req, res) => {
    res.render('news');
  };
  test = (req, res) => {
    res.render('test');
  };
}
module.exports = new NewControllers();
