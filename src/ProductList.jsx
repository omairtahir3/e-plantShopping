// ProductList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.items.length);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity to the air and removes toxins.",
          cost: "$20"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Easy to care for and effective at removing toxins.",
          cost: "$17"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifies the air and has healing properties for skin.",
          cost: "$14"
        }
      ]
    },
    // (Other categories similarly...)
  ];

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer',
    margin: '10px'
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
        <button style={styleObj} onClick={() => { setShowCart(false); setShowPlants(true); }}>Shop Plants</button>
        <button style={styleObj} onClick={() => { setShowCart(true); setShowPlants(false); }}>
          Cart ({cartCount})
        </button>
        <button style={styleObj} onClick={onHomeClick}>Home</button>
      </div>

      {showPlants && (
        <div className="plants-container">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2>{categoryObj.category}</h2>
              <div className="plants-grid">
                {categoryObj.plants.map((plant, idx) => (
                  <div key={idx} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="plant-cost">{plant.cost}</p>
                    <button className="add-to-cart-button" onClick={() => handleAddToCart(plant)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {showCart && (
        <div className="cart-container">
          <CartItem />
        </div>
      )}
    </div>
  );
}

export default ProductList;
