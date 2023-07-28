import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

//TODO : Crear un hook para obtener los datos del usuario
//TODO: crear un endpoint que me devuelva los ingredientes solamente de este usuario
//TODO: Proteger la ruta del api con un acces token

const useFetchUserData = () => {
  const { data: session } = useSession();
  const [id, setId] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    async function getUserId() {
      const res = await fetch(`/api/user/${session?.user?.email}`);
      const data = await res.json();
      setId(data.id);
    }
    getUserId();
  }, [session?.user?.email]);



  useEffect(() => {
    async function fetchIngredients() {
      const res = await fetch(`/api/user/${id}`);
      const data = await res.json();
      setIngredients(data);
    }
    if (id) {
      fetchIngredients();
    }
  }, [id]);

  return [ingredients];

};

export default useFetchUserData;
