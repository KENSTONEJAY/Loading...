const User = require('./User')
const Event = require('./Event')
const UserEvents = require('./UserEvents')

User.belongsToMany(Event, {
  //Constructing third table to store the foreign keys
  through: {
    model: UserEvents,
    unique: false
  },
//Alias for when data is retrieved
as: 'saved_events'
});

Event.belongsToMany(User, {
 
  through: {
    model: UserEvents,
    unique: false
  },

  as: 'event_participants'
});

module.exports = { User, Event, UserEvents };