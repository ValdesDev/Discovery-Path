const { Schema, model } = require("mongoose");

const questSchema = new Schema(
  {
    name:  {type: String},
    photo: {type:String},
    description:  {type:String},
    locations: [{ type: Schema.Types.ObjectId, ref: "Location" }],
  },
  {
    timestamps: true,
  }
);

const Quest = model("Quest", questSchema);

module.exports = Quest;