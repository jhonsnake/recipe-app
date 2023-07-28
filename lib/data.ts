import { Ingredient } from "@prisma/client";
import { prisma } from "../db";

export type NewIngredient = Omit<Ingredient,  "userId"| "createdAt">;

let ingredients: Ingredient[] = [];

// Get all ingredients
export const getAllIngredients = async () => {
  // return ingredients
  const ingredients = await prisma.ingredient.findMany();
  return ingredients;
};

//FIXME: getting ingredient list by UserID is not working
//get ingredients by user
export const getIngredientsByUserId = async (id:string) => {
  // return ingredients
  const ingredients = await prisma.ingredient.findMany(
    {
      where: {
        userId: id,
      },
    }
  );
  return ingredients;
};

// Create a new ingredient
export const createIngredient = async (ingredient: NewIngredient) => {
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
export const updateIngredient = async (updatedIngredient: NewIngredient) => {
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


export const getUser = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
}