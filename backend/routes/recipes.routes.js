import express from "express";
import recipeController from "../controllers/recipes.controller.js";

const router = express.Router();

// Define your route with a POST method
router.get("/getAllRecipes", recipeController.fetchRecipesByCategory);

export default router;
