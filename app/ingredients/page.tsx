import PageTitle from '@/components/PageTitle';
import { buttonVariants  } from "@/components/ui/button"
import Link from "next/link";

export default function IngredientsPage() {
  return (
    <main>
     <PageTitle title='Ingredientes'/>
     <section className="my-4">
     <nav className='flex justify-end'><Link className={buttonVariants({ variant: "default" })} href='/ingredients/new'>Crear Ingrediente</Link></nav>
     </section>
    </main>
  );
}
