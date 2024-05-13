import express from "express";
import {
  recipeController,
  addFavorite,
  getAllFavourite,
} from "../controllers/recipes.controller.js";

const router = express.Router();

router.get("/getAllRecipes", recipeController.fetchRecipesByCategory);
router.post("/addfavourite", addFavorite);
router.get("/favouriterecipe", getAllFavourite);

export default router;
