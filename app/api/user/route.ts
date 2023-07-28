import { prisma } from "@/db";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";
import * as bcrypt from "bcrypt";


type RequestBody = Omit<User, "createdAt" | "updatedAt" | "id">;

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const { email, name, password } = body;

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: await bcrypt.hash(password, 10),
    },
  });
  const { password: _, ...userWithoutPass } = user;

  return NextResponse.json(
    { message: "Success", user: userWithoutPass },
    { status: 201, statusText: "Created" }
  );
}

