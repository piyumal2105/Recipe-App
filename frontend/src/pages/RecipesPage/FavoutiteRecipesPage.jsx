// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import { Button, Modal } from "flowbite-react";

function FavoutiteRecipesPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategoryDescription, setSelectedCategoryDescription] =
    useState("");

  const handleButtonClick = (description) => {
    setSelectedCategoryDescription(description);
    setOpenModal(true);
  };

  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/receipe/favouriterecipe"
        );
        setFavoriteRecipes(response.data); // Assuming response.data is an array of favorite recipes
        setLoading(false);
      } catch (error) {
        console.error("Error fetching favorite recipes:", error);
        setLoading(false);
      }
    };

    fetchFavoriteRecipes();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          style={{ padding: "30px" }}
        >
          {favoriteRecipes.map((recipe) => (
            <Card
              key={recipe.idCategory}
              imgSrc={recipe.strCategoryThumb}
              imgAlt={recipe.strCategory}
              style={{ padding: "20px" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-44">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {recipe.strCategory}
                </h1>
              </div>

              <Button
                style={{ backgroundColor: "#fe5b85" }}
                onClick={() => handleButtonClick(recipe.strCategoryDescription)}
              >
                View Description
              </Button>
            </Card>
          ))}
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Category Description</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {selectedCategoryDescription}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default FavoutiteRecipesPage;
