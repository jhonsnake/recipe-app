import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const IngredientModel = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2, { message: "Nombre demasiado corto" }),
  createdAt: z.date().optional(),
  userId: z.string().nullish(),
})

export interface CompleteIngredient extends z.infer<typeof IngredientModel> {
  User?: CompleteUser | null
}

/**
 * RelatedIngredientModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedIngredientModel: z.ZodSchema<CompleteIngredient> = z.lazy(() => IngredientModel.extend({
  User: RelatedUserModel.nullish(),
}))
