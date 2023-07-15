"use client"
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IngredientModel } from "../../../prisma/zod";
import { Ingredient } from "@prisma/client";
import { Button } from "@/components/ui/button";


export default function NewIngredientPage() {




  const { register,
    handleSubmit,
  formState: { errors }

  } = useForm<Ingredient>({
    resolver: zodResolver(IngredientModel)
  })
  const onSubmit: SubmitHandler<Ingredient> = (data) => {


  // create a new ingredient
  fetch('/api/ingredients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}




  return (
    <main>
      <PageTitle title="Crear Ingrediente" />
      <section className="my-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="name">Nombre del ingrediente</Label>
          <Input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Ingresa el nombre de tu ingrediente"
          />

          {errors.name?.message && <p>{`${errors.name?.message}`}</p>}
        </div>
        <div>
          <Button type="submit">Crear</Button>
        </div>
      </form>
    </section>
    </main>
  );
}
