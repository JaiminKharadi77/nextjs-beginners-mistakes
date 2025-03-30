// This is a server component for (reference to my future self :])
// In nextjs 14 by default all components are server components
export default async function Product() {
  const res = await fetch("https://fakestoreapi.com/products/3");
  const product = await res.json();
  return (
    <div>
      <h2>{product.title}</h2>
    </div>
  );
}
