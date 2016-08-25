var Index = require('../controllers/index');
var User = require('../controllers/user');


/* GET home page. */
module.exports = function(app) {
  app.get('/', Index.index);
// module.exports = function(app) {
//   // 显示首页
//   app.get('/', function(req, res) {
//     res.render('index', {
//       blogTitle: 'My Blog',
//       title: '主页'
//     });
//   });
  // user
  app.post('/reg', User.signup);
  app.post('/login', User.signin);
  app.get('/reg', User.showSignup);
  app.get('/login', User.showSignin);

  
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
