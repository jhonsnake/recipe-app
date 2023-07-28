"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import {Button} from "@/components/ui/button"

const SigninButton = () => {
    const { data: session } = useSession()


    if (session && session.user) {
        return (
            <div className=" flex justify-center items-center gap-4">

                <p>{session.user.name}</p>

              <Button onClick={()=>signOut()} variant="outline">Cerrar Sesión</Button>
            </div>
        )
    }

  return (
    <Button onClick={()=>signIn()}>Iniciar sesión</Button>
  )
}

export default SigninButton