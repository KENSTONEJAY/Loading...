const mongoose = require("mongoose");


const { Model, Schema } = mongoose
var UUID = mongoose.Types.UUID;
class Event extends Model { }

//Fields for Events model
const eventSchema = new Schema(
  {

    event_id: {
      type: String,
      required: "Enter a event name"
    },
    event_name: {
      type: String,
      required: "Enter a event name"
    },
    event_type: {
      type: String,
      required: "Enter a event type"
    },
    event_venue: {
      type: String,
      required: "Enter a event venue"
    },
    event_state: {
      type: String,
      required: "Enter a event state"
    },
    event_city: {
      type: String,
      required: "Enter a event city"
    },
    event_Description: {
      type: String
    },
    zip_code: {
      type: String,
      required: "Enter a zip code"
    },
    event_date: {
      type: Date,
      required: "Enter a event date"
    }
  }
);
module.exports = mongoose.model(Event, eventSchema, 'Event');
