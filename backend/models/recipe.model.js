import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  idCategory: {
    type: Number,
    require: true,
  },
  strCategory: {
    type: String,
    require: true,
  },
  strCategoryThumb: {
    type: String,
    require: true,
  },
  strCategoryDescription: {
    type: String,
    require: true,
  },
});

const Receipe = mongoose.model("Receipe", recipeSchema);

export default Receipe;
