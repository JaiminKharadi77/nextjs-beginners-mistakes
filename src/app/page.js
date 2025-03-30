//1) "use client"; // This will work but it's not the best way to do it because it's not server side rendered
//2) It will convert Product to client components ,but Product is a server component
//3) So it will be to use the "use client" in client components itself

import { Product, FavoriteBtn } from "@/app/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-32 gap-12 text-xl">
      <h1>My Stores</h1>
      <Product />
      <FavoriteBtn />
    </main>
  );
}
