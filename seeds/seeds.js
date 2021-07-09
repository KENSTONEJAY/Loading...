
let mongoose = require("mongoose");
let User = require("../models/User");
let Event = require("../models/Event");
const  {uuid } = require('uuidv4');
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/ticket_scalper',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
const userData = [
  {
    "username": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
    "username": "amiko2k20@aol.com",
    "password": "password12345"
  }
];
const eventData = [
  {
    "event_name": "Base Ball Finals",
    "event_type": "sport",
    "event_venue": "dunkin donut park",
    "event_description": "exciting finals",
    "event_state": "CT",
    "event_city": "Hartford",
    "zip_code": "06103",
    "event_date": new Date("2021-09-01"),
    "event_id": uuid ()

  },
  {
    "event_name": "Opera",
    "event_type": "concert",
    "event_venue": "Excel center",
    "event_description": "exciting concert",
    "event_state": "CT",
    "event_city": "Hartford",
    "zip_code": "06103",
    "event_date": new Date("2021-09-01"),
    "event_id": uuid ()
  },
  {
    "event_name": "Soccer",
    "event_type": "sport",
    "event_venue": "Excel center",
    "event_description": "exciting concert",
    "event_state": "NJ",
    "event_city": "Jersey City",
    "zip_code": "06123",
    "event_date": new Date("2021-10-01"),
    "event_id": uuid ()
  },
  {
    "event_name": "Madonna Events",
    "event_type": "concert",
    "event_venue": "Xfinity center",
    "event_description": "Madonna concert",
    "event_state": "NY",
    "event_city": "Albany",
    "zip_code": "06143",
    "event_date": new Date("2021-09-20"),
    "event_id": uuid ()
  },
  {
    "event_name": "Hamilton New York",
    "event_type": "concert",
    "event_venue": "Broadway center",
    "event_description": "Hamilton New York",
    "event_state": "NY",
    "event_city": "New York City",
    "zip_code": "06143",
    "event_date": new Date("2021-09-20"),
    "event_id": uuid ()
  }
]
User.deleteMany({})
  .then(() => {
    User.collection.insertMany(userData);
  })
  .then(data => {
    Event.deleteMany({})
      .then(() => {
        Event.collection.insertMany(eventData).then(data => {
          console.log(data.result.n + " records inserted!");
          process.exit(0);
        })
      });

  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
