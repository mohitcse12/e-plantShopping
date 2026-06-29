import React from 'react';

function ProductList() {
  return (
    <div className="product-list">
      <h2>Our Beautiful Plants</h2>
      <div className="products">
        <div className="plant-card">
          <h3>Aloe Vera</h3>
          <p>$15</p>
          <button>Add to Cart</button>
        </div>
        <div className="plant-card">
          <h3>Snake Plant</h3>
          <p>$20</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
