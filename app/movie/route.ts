import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const response = await fetch(
    `http://www.omdbapi.com/?i=${id}&plot=full&apikey=1beeef23`,
  );
  const data = await response.json();

  const normalizedData = Object.entries(data).reduce(
    (acc, [key, value]: [string, any]) => {
      if (key === "Poster") {
        return { ...acc, [key]: value.replace("SX300", "SX2000") };
      }
      if (key === "Actors") return { ...acc, [key]: value.split(", ") };

      return { ...acc, [key]: value };
    },
    {},
  );

  return NextResponse.json(normalizedData);
}
