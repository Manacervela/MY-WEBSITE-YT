
import React from 'react';
import howToImage from '../../images/Howto.png';


const howToOrderStyle = {
  margin: '0 auto',      
  maxWidth: '100%',     
  padding: '10px',      
  boxSizing: 'border-box', 
  marginTop: '-10%',
  marginBottom: '0',
};

const imageStyle = {
  width: '100%',        
  height: 'auto',       
  display: 'block',     
};

const HowToOrder = () => {
  return (
    <div id='how-to-order' style={howToOrderStyle}>
      <img
        src={howToImage} 
        alt="Instrucciones para hacer un pedido"
        style={imageStyle}
      />
    </div>
  );
};

export default HowToOrder;
