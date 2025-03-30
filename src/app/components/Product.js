
export default async function Product() {
  const res = await fetch("https://fakestoreapi.com/products/3");
  const product = await res.json();
  return (
    <div>
      <h2>{product.title}</h2>
    </div>
  );
}
