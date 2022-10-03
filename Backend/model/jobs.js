const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    requrie: true,
  },
  description: {
    type: String,
    requrie: true,
  },
  salary: {
    type: String,
    require: true,
  },
  skills: [
    {
      type: String,
      require: true,
    },
  ],
  compamy: {
    type: String,
    require: true,
  },
  application: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
  ],
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Job", jobSchema);
