const mongoose = require("mongoose");


const { Model, Schema } = mongoose

class UserEvents extends Model {}

const userEventsSchema = new Schema(
    {
      
      user_id: {
        type: String,
        required: "Enter a name"
      },
      event_id: {
        type: String,
        required: "Enter a name"
      }
    }
  );
  
  module.exports = mongoose.model(UserEvents, userEventsSchema, 'UserEvents');
  

