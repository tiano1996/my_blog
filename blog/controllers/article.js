var Article = require('../models/article');
// var _ = require('underscore');

// 新建文章页
exports.new = function(req, res) {
  res.render('post', {
    blogTitle: 'My Blog',
    title: '编辑文章',
    success: req.flash('success').toString(),
    error: req.flash('error').toString(),
    info: req.flash('info').toString()
  });
}

// postArticle
exports.postArticle = function(req, res) {
  var article = req.body.article;
  var _article;
  console.log(article);

  _article = new Article(article);
  console.log(_article);
  _article.save(function(err, article) {
    if (err) {
      console.log(err);
      return res.redirect('/');
    }

    req.flash('success', '文章发布成功');
    return res.redirect('/');
  });

}
