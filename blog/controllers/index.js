var Article = require('../models/article');

var markdown = require('markdown').markdown;
// index page
exports.index = function(req, res) {

  Article
    .find({})
    .populate('author', 'name')
    .exec(function(err, articles) {
      articles.forEach(function(article) {
        article.content = markdown.toHTML(article.content);
      });

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
