import express from "express";
import {
  recipeController,
  addFavorite,
} from "../controllers/recipes.controller.js";

const router = express.Router();

router.get("/getAllRecipes", recipeController.fetchRecipesByCategory);
router.post("/addfavourite", addFavorite);

export default router;
