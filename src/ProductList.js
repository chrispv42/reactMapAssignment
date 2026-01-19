function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: "$999" },
    { id: 2, name: "Phone", price: "$699" },
    { id: 3, name: "Headphones", price: "$199" },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
