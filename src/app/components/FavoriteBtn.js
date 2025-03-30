"use client"; // 4) This will work because it's a client component and it's best practice to use it in client components 
import { useState } from "react";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";

export default function FavoriteBtn() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className="p-2 rounded-md bg-zinc-100"
    >
      {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
    </button>
  );
}
