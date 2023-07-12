import PageTitle from '@/components/PageTitle';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Ingredient } from '@prisma/client';
import z from 'zod';



export default function NewIngredientPage() {
  return (
    <main>
     <PageTitle title='Crear Ingrediente'/>
     <section className="my-4">
    <form >
    <div >
      <Label htmlFor="name">Nombre del ingrediente</Label>
      <Input id="name" type="text" placeholder='Ingresa el nombre de tu ingrediente' />
    </div>
    </form>
     </section>
    </main>
  );
}
