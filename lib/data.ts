import { Ingredient } from "@prisma/client";
import { prisma } from "../db";

let ingredients: Ingredient[] = [];

// Get all ingredients
export const getIngredients = async () => {
  // return ingredients
  const ingredients = await prisma.ingredient.findMany();
  return ingredients;
};

// Create a new ingredient
export const createIngredient = async (ingredient: Ingredient) => {
  //ingredients.push(ingredient)
  const newIngredient = await prisma.ingredient.create({ data: ingredient });
  return newIngredient;
};

// Get a single ingredient
export const getIngredient = async (id: string) => {
  //return ingredients.find((ingredient) => ingredient.id === id)
  const ingredient = await prisma.ingredient.findUnique({ where: { id } });
  return ingredient;
};

// Update a ingredient
export const updateIngredient = async (updatedIngredient: Ingredient) => {
  // ingredients = ingredients.map((ingredient) => {
  //     if (ingredient.id === updatedIngredient.id) {
  //         return updatedIngredient
  //         }
  //         return ingredient
  //     })

  const newUpdatedIngredient = await prisma.ingredient.update({
    where: { id: updatedIngredient.id },
    data: updatedIngredient,
  });

  return newUpdatedIngredient;
};

// Delete a ingredient
export const deleteIngredient = (id: string) => {
  //ingredients = ingredients.filter((ingredient) => ingredient.id !== id)
  const deletedIngredient = prisma.ingredient.delete({ where: { id } });
  return deletedIngredient;
};
