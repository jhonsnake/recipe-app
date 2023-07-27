import { prisma } from "@/db";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  // Parse the request body
  const body: RequestBody = await request.json();

  // Extract the username and password values
  const { username, password } = body;

  // Query the database for the user
  const user = await prisma.user.findUnique({
    where: {
      email: username,
    },
  });

  // Check whether the user exists and the password is correct
  if (user && (await bcrypt.compare(password, user.password))) {
    // If the username and password match, return a success message and the user
    const { password, ...userWithoutPass } = user;
    return NextResponse.json(
      { message: "Success", user: userWithoutPass },
      { status: 200, statusText: "OK" }
    );
  }

  // If the username and password don't match, return a failure message
  return NextResponse.json(
    { message: "Error", error: "Invalid credentials" },
    { status: 401, statusText: "Unauthorized" }
  );
}
