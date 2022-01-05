const { Schema, model } = require("mongoose");

const locationSchema = new Schema(
  {
    name:  {type: String},
    photo: {type:String},
    info:  {type:String},
    latitude:      {type:Number},
    longitude:     {type:Number},
  },
  {
    timestamps: true,
  }
);

const Location = model("Location", locationSchema);

module.exports = Location;