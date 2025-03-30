export default function Product({ product }) {
  if (!product) return <div>Loading product...</div>;

  return (
    <div className="product">
      <h2>{product.title}</h2>
    </div>
  );
}
