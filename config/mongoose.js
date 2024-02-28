const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("strictQuery", false);

mongoose.connect('mongodb+srv://sqilco:sqilco@cluster0.x8eclvj.mongodb.net/', { useNewUrlParser: true })
.catch((e) => console.log(`Error connecting to db: ${e}`));
;

module.exports = { mongoose };
