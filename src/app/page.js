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
