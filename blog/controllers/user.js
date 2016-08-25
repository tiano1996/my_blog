var User = require('../models/user');

// 显示注册页
exports.showSignup = function(req, res) {
  res.render('reg', {
    blogTitle: 'My Blog',
    title: '注册新会员',
    success: req.flash('success').toString(),
    error: req.flash('error').toString()
  });
}

// 显示登陆页
exports.showSignin = function(req, res) {
  res.render('login', {
    blogTitle: 'My Blog',
    title: '会员登陆',
    success: req.flash('success').toString(),
    error: req.flash('error').toString()
  });
}


// 注册控制
exports.signup = function(req, res) {
  var _user = req.body.user;
  var _password_re = req.body.password_repeat;

  // 检验两次密码是否一致
  if(_user.password !== _password_re) {
    req.flash('error', '两次密码输入不一致！');
    return res.redirect('/reg');
  }

  User.findOne({name: _user.name}, function(err, user) {
    if (err) {
      console.log(err);
    }
    // 检验用户是否存在
    if(user) {
      req.flash('error', '该用户已经存在！');
      return res.redirect('/reg');
    } else {
      // 存入用户信息
      var user = new User(_user);
      user.save(function(err, user) {
        if (err) {
          console.log(err);
        }

        req.session.user = user;
        req.flash('success', '注册成功！');
        res.redirect('/');
      });
    }
  });

}

// 登陆控制
exports.signin =  function(req, res) {
  var _user = req.body.user;
  var password = _user.password;

  User.findOne({name: _user.name}, function(err, user) {
    if (err) {
      console.log(err);
    }

    if(!user) {
      req.flash('error', '用户名不存在');
      return res.redirect('/login');
    }

    user.comparePassword(password, function(err, isMatch) {
      if (err) {
        console.log(err);
      }

      if(isMatch) {
        req.session.user = user;
        req.flash('success', '登陆成功');
        return res.redirect('/');
      } else {
        req.flash('error', '密码错误');
        return res.redirect('/login');
      }
    });
  });
}

// logout
exports.logout = function(req, res) {
  delete req.session.user;
  req.flash('info', '您已成功登出！');
  res.redirect('/');
}

// 登陆中间件
exports.checkLogin = function(req, res, next) {
  if(!req.session.user) {
    req.flash('error', '未登陆');
    res.redirect('/login');
  }
  next();
}

exports.checkNotLogin = function(req, res, next) {
  if(req.session.user) {
    req.flash('err', '您已登陆');
    res.redirect('back');
  }
  next();
}
