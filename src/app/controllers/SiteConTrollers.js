
const Course = require('../../models/Course')
class SiteControllers {
  //[GET] /new
  index = (req, res) => {
    Course.find({},(err,courses)=>{
      if(!err) {res.json(courses)}
      else{res.status(500).json({error:err})}
    })
    // res.render('home');
  };
  search = (req, res) => {
    res.render('search');
  };
}
module.exports = new SiteControllers();
