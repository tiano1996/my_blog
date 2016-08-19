/* GET home page. */
module.exports = function(app) {
  // 显示首页
  app.get('/', function(req, res) {
    res.render('index', {
      blogTitle: 'My Blog',
      title: '主页'
    });
  });

  // 显示注册页
  app.get('/reg', function(req, res) {
    res.render('reg', {
      blogTitle: 'My Blog',
      title: '注册新会员'
    });
  });

  // 注册控制
  app.get('/reg', function(req, res) {

  });

  // 显示登陆页
  app.get('/login', function(req, res) {
    res.render('login', {
      blogTitle: 'My Blog',
      title: '会员登陆'
    });
  });
  // 登陆控制
  app.get('/login', function(req, res) {

  });

  // 显示发布页
  app.get('/post', function(req, res) {
    res.render('post', {
      blogTitle: 'My Blog',
      title: '发布'
  });
  });
  // 发布控制
  app.get('/post', function(req, res) {

  });

  // 登出
  app.get('/logout', function(req, res) {

  });
}
