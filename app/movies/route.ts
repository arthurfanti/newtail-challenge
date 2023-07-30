import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  const response = await fetch(
    `http://www.omdbapi.com/?s=${title}&apikey=1beeef23`,
  );
  const { Search } = await response.json();

  return NextResponse.json(Search);
}
