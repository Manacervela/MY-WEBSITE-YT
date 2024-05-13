import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
        <img src='/logo.png' alt='Atelier Patisserie Logo' />
      </div>
      <section className='footer-subscription' style={{ textAlign: 'center' }}>
        <p className='footer-subscription-heading'>
          Unlock exclusive discounts – Subscribe to Atelier Patisserie!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className="input-areas" style={{ marginBottom: '18px', padding: '8px 20px', outline:'none', fontSize: '18px,', border: '1px solid #fff' }}>
          <form>
            <input 
              type="email" 
              name="user_email" 
              placeholder='Your Email'
            />
            <button className='btn--outline' style={{ background: 'pink', marginTop: '30px'}}>Subscribe</button>
          </form>
        </div>
      </section>
      <div className='footer-contact'>
        <h3>Contact</h3>
        <p>35 Remuera Road, Auckland</p>
        <p>0210482236</p>
        <p>atelierpatisserie@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
