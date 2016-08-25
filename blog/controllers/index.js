var Article = require('../models/article');

// index page
exports.index = function(req, res) {

  Article
    .find({})
    .populate('author', 'name')
    .exec(function(err, articles) {
      res.render('index', {
        blogTitle: 'My Blog',
        title: '首页',
        articles: articles,
        success: req.flash('success').toString(),
        error: req.flash('error').toString(),
        info: req.flash('info').toString()
      });
    });

}
