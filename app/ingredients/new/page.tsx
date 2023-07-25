"use client";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IngredientModel } from "../../../prisma/zod";
import { Ingredient } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";



export default function NewIngredientPage() {

  const [isLoading, setIsLoading] = useState(false);

  const IngredientForm = useForm<Ingredient>({
    resolver: zodResolver(IngredientModel),
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<Ingredient> = (data) => {
    // create a new ingredient
    fetch("/api/ingredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //redirect to ingredients page using next router
    setIsLoading(true);
    router.push("/ingredients");


  };

  const NewIngredientForm = () => {
  return  <Form {...IngredientForm}>
  <form
    onSubmit={IngredientForm.handleSubmit(onSubmit)}
    className="space-y-8"
  >
    <FormField
      control={IngredientForm.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nombre del ingrediente</FormLabel>
          <FormControl>
            <Input
              placeholder="Ingresa el nombre del ingrediente"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Crear</Button>
  </form>
</Form>
  }

  return (
    <main>
      <PageTitle title="Nuevo ingrediente" />
      <section className="my-4">
        {!isLoading ? NewIngredientForm() : <p>Creando ingrediente...</p>}
      </section>
    </main>
  );
}
