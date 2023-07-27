import { NextResponse } from "next/server";
import { getIngredients, createIngredient } from "@/lib/data";
import uuid from 'react-uuid';

export async function GET(request: Request) {
  try {
    const ingredients = await getIngredients();
    return NextResponse.json(
      { message: "Success", ingredients },
      { status: 200, statusText: "OK" }
    );
  } catch (error) {
    NextResponse.json(
      { message: "Error", error },
      { status: 500, statusText: "Server Error" }
    );
  }
}

export async function POST(request: Request) {
    const { name } = await request.json();
    try {
        const ingredient = await createIngredient({ name, id: uuid() });
    return NextResponse.json(
      { message: "Success", ingredient },
      { status: 201, statusText: "Created" }
    );
  } catch (error) {
    NextResponse.json(
      { message: "Error", error },
      { status: 500, statusText: "Server Error" }
    );
  }
}
