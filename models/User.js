const bcrypt = require('bcrypt');
const mongoose = require("mongoose");

const { Model, Schema } = mongoose

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

//Fields for User model
const userSchema = new Schema(
  {
    
    name: {
      type: String,
      required: "Enter a name"
    },
    email: {
      type: String,
      required: "Enter a email",
      unique: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: "Enter a password"
    },
  },
  {

    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    }
  }
);

module.exports = mongoose.model(User, userSchema, 'User');