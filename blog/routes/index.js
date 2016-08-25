var Index = require('../controllers/index');
var User = require('../controllers/user');
var Article = require('../controllers/article');


/* GET home page. */
module.exports = function(app) {

  // pre handle user
  app.use(function(req, res, next) {
    var _user = req.session.user;

    app.locals.user = _user;

    next();
  });

  // index
  app.get('/', Index.index);

  // user
  app.post('/reg', User.checkNotLogin, User.signup);
  app.post('/login', User.checkNotLogin, User.signin);
  app.get('/reg', User.checkNotLogin, User.showSignup);
  app.get('/login', User.checkNotLogin, User.showSignin);
  app.get('/logout', User.checkLogin, User.logout);

  // article
  app.get('/article/new', User.checkLogin, Article.new);
  app.post('/article/new', User.checkLogin, Article.postArticle);


}

//
//   // 显示发布页
//   app.get('/post', function(req, res) {
//     res.render('post', {
//       blogTitle: 'My Blog',
//       title: '发布'
//   });
//   });
//   // 发布控制
//   app.get('/post', function(req, res) {
//
//   });
//
//   // 登出
//   app.get('/logout', function(req, res) {
//
//   });
// }
