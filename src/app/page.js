import { Product, FavoriteBtn, Rating } from "@/app/components";

async function getProduct() {
  const res = await fetch(`https://fakestoreapi.com/products/3`);
  const product = await res.json();
  return product;
}

async function getRatings() {
  const res = await fetch(
    `https://www.randomnumberapi.com/api/v1.0/random?min=1&max=5&count=1`
  );
  const data = await res.json();
  return {
    rating: data[0].toFixed(1),
  };
}

export default async function Home() {
  const [product, ratings] = await Promise.allSettled([
    getProduct(),
    getRatings(),
  ]); // This is best practice to fetch data in parallel to avoid race condition
  // for example if getProduct fails, the ratings will still be fetched

  return (
    <main className="flex flex-col items-center mt-32 gap-12 text-xl">
      <h1>My Stores</h1>
      <Product product={product} />
      <Rating rating={ratings.rating} />
      <FavoriteBtn />
    </main>
  );
}
