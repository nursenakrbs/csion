const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://mehmetsan:"+process.env.mongoPassword+"@clustermehmet-aio9p.mongodb.net/Personality",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const Schema = mongoose.Schema;
let EducationProblemSchema = new Schema({
  category: String,
  subcategory: String,
  problem: String,
  personalQuestions: [String],
  encourage: [String],
  discourage: [String]
});

module.exports = mongoose.model(
  "EducationProblem",
  EducationProblemSchema,
  "EducationProblems"
);
