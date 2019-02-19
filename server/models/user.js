const mongoose=require('mongoose');
const Joi=require('joi')
const jwt= require('jsonwebtoken')
require('dotenv').config()

const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
      },
      email: {
          type: String,
          required: true,
          unique: true
        },
        password: {
          type: String,
          required: true,
          minlength: 8
        },
        isAdmin: {
          type: Boolean,
          default: false
        }
})

userSchema.methods.token=function () {
    const token =jwt.sign({_id: this._id,isAdmin: this.isAdmin, username : this.username},'dhiraj');
    return token;
  }

function validationUser(body) {
  
const schema={
  username : Joi.string().max(50).min(5).required(),
  email : Joi.string().required().email(),
  password : Joi.string().min(8)
}

return Joi.validate(body,schema);
}


const User= mongoose.model('User', userSchema);

exports.validationUser=validationUser;
exports.User=User;
