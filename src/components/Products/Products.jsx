import React, { useState } from 'react';
import './Products.css';
import IMG1 from '../../images/cake1.jpg';
import IMG2 from '../../images/cake2.jpg';
import IMG3 from '../../images/cake3.jpg';
import IMG4 from '../../images/cake4.png';
import IMG5 from '../../images/cake5.jpg';
import IMG6 from '../../images/cake6.jpg';

const Products = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (productInfo) => {
    setSelectedProduct(productInfo);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedProduct(null);
    setShowPopup(false);
    
  };

 
  const productsInfo = [
    {
      image: IMG1,
      title: 'Texture Cake',
      description: 'From: $35 Choose between sage green or peach & pink for this stunning cake. Available in your preferred size & flavour options. 24 hours notice needed',
    },
    {
      image: IMG2,
      title: 'Fruit Cake',
      description: 'From: $40 Traditional Fruit Cake filled with loads of delicious brandy soaked dried fruit. This is covered in a traditional almond paste made from real almonds (no fake almond flavour here!). This is a great cake flavour for fruit cake lovers, and even for those that don’t like fruit cake, they might be surprised!',
    },
    {
      image: IMG3,
      title: 'White Chocolate Cake',
      description: 'From: $45 A white chocolate and vanilla mud cake, this is a much lighter flavour that the chocolate and is layered with white chocolate ganache. This is a super sweet cake, more of a ‘plain’ flavour than the chocolate, still a dense cake.',
    },
    {
      image: IMG4,
      title: 'Lolly Cake',
      description: 'From: $45 Another kiwi classic from our childhood. Using malt biscuits and Eskimo lollies, I shape the lolly cake into a cake mold. If you love lolly cake or have a super sweet tooth, then this could be for you! Great if serving the cake as part of a dessert table or with coffee.',
    },
    {
      image: IMG5,
      title: 'Cherry Cake',
      description: 'From: $45 Cherry: This can be layered with either white or dark chocolate ganache. This is a new flavour added due to a number of requests, I am love how this smells in my kitchen!',
    },
    {
      image: IMG6,
      title: 'Candy Cake',
      description: 'From: $50.00 A candy lovers delight! Overloaded with the yummiest chocolates, donuts & candy to fix any sweet tooth, Available in your preferred size & flavour options. Happy Birthday topper optional Slight variations may apply due to availability of candy',
    },
  ];

  return (
    <section id='products'>
      <h5>Our Products</h5>
      <h2>Flavors that Delight: Explore Our Selection</h2>
      <div className="container_product_container">
        {productsInfo.map((product, index) => (
          <article className="products_item" key={index}>
            <div className="products_item-image">
              <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <button onClick={() => openPopup(product)} className="btn">
              Info
            </button>
          </article>
        ))}
      </div>

      {showPopup && selectedProduct && (
        <div className="popup">
          <div className="popup-content">
            <h3>Information</h3>
            <h4>{selectedProduct.title}</h4>
            <p>{selectedProduct.description}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
