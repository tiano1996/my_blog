var User = require('../models/user');
// 显示注册页
exports.showSignup = function(req, res) {
  res.render('reg', {
    blogTitle: 'My Blog',
    title: '注册新会员'
  });
}

// 注册控制
exports.signup = function(req, res) {

}

// 显示登陆页
exports.showSignin = function(req, res) {
  res.render('login', {
    blogTitle: 'My Blog',
    title: '会员登陆'
  });
}
// 登陆控制
exports.signin =  function(req, res) {

}
