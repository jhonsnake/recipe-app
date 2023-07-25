import PageTitle from '@/components/PageTitle';
import { buttonVariants  } from "@/components/ui/button"
import { Ingredient } from "@prisma/client";
import { columns } from "./columns"
import Link from "next/link";
import {  getIngredients } from '@/lib/data';
import { DataTable } from '@/components/ui/data-table';

//TODO fecth images
//TODO create progresive rendering for images
//TODO Be sure that the data is updating after a new ingredient is created

export default async function IngredientsPage() {
  const data: Ingredient[] =  await getIngredients()




  return (
    <main>
     <PageTitle title='Ingredientes'/>
     <section className="my-4">
     <nav className='flex justify-end'><Link className={buttonVariants({ variant: "default" })} href='/ingredients/new'>Crear Ingrediente</Link></nav>
     <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>

     </section>
    </main>
  );
}
