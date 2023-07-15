
import Link from "next/link";

const NavBarComponent = () => {
  return (
    <nav className="border h-14 items-center pt-2 ">
   <div className="container">
   <div className="flex  justify-between">
        <div className="flex items-center">
        <Link href='/'> <h3 className='scroll-m-20 mr-6 text-2xl font-bold tracking-tight'>RecipeApp</h3></Link>
        <ul className="flex gap-3">
            <li> <Link href='/ingredients'>
            Ingredientes
            </Link></li>

        </ul>
        </div>

    </div>
   </div>
  </nav>
  )
}

export default NavBarComponent