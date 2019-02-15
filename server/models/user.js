const mongoose=require('mongoose');
const Joi=require('joi')

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
          minlength: 5,
          maxlength: 255,
          unique: true
        },
        password: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 1024
        },
        isAdmin: {
          type: Boolean,
          default: false
        }
})

userSchema.methods.token=function () {
    const token =jwt.sign({_id: this._id,isAdmin: this.isAdmin, username : this.username},process.env.TOKEN_PASS);
}

function validationUser(body) {
  
const schema={
  username : Joi.string().max(50).min(3).required(),
  email : Joi.string().required().email(),
  password : Joi.string().min(8)
}

return Joi.validate(body,schema);
}


const User= mongoose.model('User', userSchema);

exports.validationUser=validationUser;
exports.User=User;
