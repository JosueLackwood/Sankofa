import { Schema, model, models } from "mongoose";

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  startDateTime: {
    type: Date,
    required: true,
  },

  endDateTime: {
    type: Date,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  organizer: {
    type: String,
    required: true,
  },

  attendees: [
    {
      type: String,
    },
  ],
});

const Event =
  models.Event || model("Event", EventSchema);

export default Event;
