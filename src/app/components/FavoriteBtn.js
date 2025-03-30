"use client"; // 4) This will work because it's a client component and it's best practice to use it in client components
import { useState } from "react";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";

export default function FavoriteBtn() {
  const [isFavorite, setIsFavorite] = useState(false);
  let isFavoriteBefore;
  if (typeof window !== "undefined") {
    // isFavoriteBefore = localStorage.getItem("isFavorite");
    isFavoriteBefore = true;
  }
  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className="p-2 rounded-md bg-zinc-100"
    >
      <p suppressHydrationWarning>
        {/* using suppressHydrationWarning to avoid hydration error 
        IMPORTANT: Use this only when you are sure the value changing will not cause any effect
        */}
        {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
        {`You have liked this item ${isFavoriteBefore ? "Yes" : "No"}`}
      </p>
    </button>
  );
}
