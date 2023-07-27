import * as z from "zod"
import { CompleteIngredient, RelatedIngredientModel } from "./index"

export const UserModel = z.object({
  id: z.string().uuid(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  ingredients: CompleteIngredient[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  ingredients: RelatedIngredientModel.array(),
}))
