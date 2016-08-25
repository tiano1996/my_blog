// index page
exports.index = function(req, res) {
  res.render('index', {
    blogTitle: 'My Blog',
    title: '主页'
  });
}
