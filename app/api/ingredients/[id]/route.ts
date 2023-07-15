import { getIngredient, updateIngredient, deleteIngredient } from "@/lib/data";
import { NextResponse } from "next/server";


export async function GET(request: Request, response: Response) {
  try {
    const id = request.url.split("ingredients/")[1];
    const ingredient = await getIngredient(id);
    if (!ingredient) {
      return NextResponse.json(
        { message: "Error", error: "Ingredient not found" },
        { status: 400, statusText: "Bad Request" }
      );
    }

    return NextResponse.json(
      { message: "Success", ingredient },
      { status: 200, statusText: "OK" }
    );
  } catch (error) {
    NextResponse.json(
      { message: "Error", error },
      { status: 500, statusText: "Server Error" }
    );
  }
}

export async function PUT(request: Request, response: Response) {
  try {
    const id = request.url.split("ingredients/")[1];
    const ingredient = await getIngredient(id);
    if (!ingredient) {
      return NextResponse.json(
        { message: "Error", error: "Ingredient not found" },
        { status: 400, statusText: "Bad Request" }
      );
    }
    const { name } = await request.json();
    const updatedIngredient = { ...ingredient, name };
    await updateIngredient(updatedIngredient);
    return NextResponse.json(
      { message: "Success", ingredient: updatedIngredient },
      { status: 200, statusText: "OK" }
    );
  } catch (error) {
    NextResponse.json(
      { message: "Error", error },
      { status: 500, statusText: "Server Error" }
    );
  }
}

export async function DELETE(request: Request, response: Response) {
  try {
    const id = request.url.split("ingredients/")[1];
    const ingredient = await getIngredient(id);
    if (!ingredient) {
      return NextResponse.json(
        { message: "Error", error: "Ingredient not found" },
        { status: 400, statusText: "Bad Request" }
      );
    }
    await deleteIngredient(id);
    return NextResponse.json(
      { message: "Success", ingredient },
      { status: 200, statusText: "OK" }
    );
  } catch (error) {
    NextResponse.json(
      { message: "Error", error },
      { status: 500, statusText: "Server Error" }
    );
  }
}
