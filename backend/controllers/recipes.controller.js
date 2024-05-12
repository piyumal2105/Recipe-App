import axios from "axios";

const recipeController = {
  fetchRecipesByCategory: async (req, res) => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const categories = response.data.categories;

      if (!categories) {
        return res.status(404).json({ message: "Categories not found" });
      }

      res.status(200).json({ categories });
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default recipeController;
