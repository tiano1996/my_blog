var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String
  },
  password: String,
  emmail: String,
  role: {
    type: Number,
    default: 0
  },
  meta: {
    creatAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

UserSchema.pre('save', function(next){
  var user = this;

  if(this.isNew) {
    this.meta.creatAt = this.meta.updateAt = Date.now();
  } else {
    this.updateAt = Date.now();
  }

  bcrypt.getSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});


module.exports = UserSchema;
