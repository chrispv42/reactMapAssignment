function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: '$999.99', category: 'Electronics', featured: false },
    { id: 2, name: 'Toy', price: '$19.99', category: 'Clothing', featured: true },
    { id: 3, name: 'Night Stand', price: '$99.99', category: 'Home Essentials', featured: false },
    { id: 4, name: 'Smart Watch', price: '$789.99', category: 'Electronics', featured: true },
    { id: 5, name: 'Sweater', price: '$39.99', category: 'Clothing', featured: false },
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
