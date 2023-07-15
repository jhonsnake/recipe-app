import * as z from "zod"

export const IngredientModel = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2, { message: "Nombre demasiado corto" }),
  createdAt: z.date().optional(),
})
