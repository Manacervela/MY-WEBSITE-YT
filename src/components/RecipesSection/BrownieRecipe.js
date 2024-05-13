import React, { useEffect, useState } from 'react';
import { RecetaContainer, RecetaImagen, Containerh3, ContainerP2, GoToHomeLink, PageContainer, ContentContainer, ListContainer, ListItem, OrderedListContainer, OrderedListItem } from './BrownieElements';
import imagen from '../../images/Brownie.jpg';
import styled from 'styled-components';
import brownie2 from '../../images/brownie2.jpg';
import brownie3 from '../../images/brownie3.jpg';


const Logo = styled.img`
  max-height: 150px; 
  padding: 0px;
  position: fixed;
  top: ${(props) => (props.showLogo ? '10px' : '-200px')};
  left: 10px;
  z-index: 2;
  transition: top 0.3s ease-in-out;
`;

const BrownieRecipe = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowLogo(false);
    } else {
      setShowLogo(true);
    }
  };

  return (
    <>
      <PageContainer>
        <Logo
          src="/logo.png"
          alt="Logo"
          showLogo={showLogo}
        />
        <ContentContainer>
        <div style={{ marginTop: '100px', marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style={{ letterSpacing: '1px', lineHeight: '1.4' }}>FUDGY GOOEY BROWNIES</h2>
    <p style={{ color:'grey', letterSpacing: '0.5px', lineHeight: '1.6', marginTop: '40px', maxWidth: 'auto', textAlign: 'center' }}>We all like our brownies in different ways. I love fudgy gooey brownies that melt in your mouth. That’s exactly how these brownies are and they have me head over heels for them! Just by looking at the pictures of the inside you can see that they’re going to melt in your mouth.</p>
    <img src={brownie2} alt="Brownie 2" width={350} height={400} style={{ marginTop: '40px' }} />
  </div>
  <div style={{ marginTop: '40px', marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <p style={{color:'grey', letterSpacing: '0.5px', lineHeight: '1.6', textAlign: 'center' }}>Just look at the inside! I’m drooling just remembering how they taste like (yes, they’re gone by now). They also have this lovely crust on top that separates them from a simple cake.</p>
    <img src={brownie3} alt="Brownie 3" width={300} height={500} style={{ marginTop: '40px' }} />
          </div>
          <RecetaContainer style={{ borderWidth: '10px', borderStyle: 'solid', borderColor: '#ffffff', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', margin: '200px auto 0 auto', maxWidth: '800px', padding: '0 10px' }}>
            <RecetaImagen src={imagen} alt="Pie Crust Image" width={200} height={100} style={{ borderWidth: '20px', borderStyle: 'solid', borderColor: '#ffffff', borderRadius: '40px', position: 'absolute', top: '-10%', left: '50%', transform: 'translate(-50%, -10%)' }} />
            <div>
              <GoToHomeLink to="/">Go to Home</GoToHomeLink>
              <Containerh3>Fudgy Gooey Brownies</Containerh3>
              <div>
              <ContainerP2>
             Course: Dessert, Tea Time  |  Cuisine: Low  |  Prep Time: 20 minutes  |  Cook Time: 20 minutes  |  Servings: 1 (26x17cm) mould 
              </ContainerP2>
              </div>
            </div>
            <div>
  <h4 style={{ marginTop: '40px', marginBottom: '10px', color:'grey'}}>Ingredients</h4>
  <ListContainer>
    <ul>
      <ListItem>150 g unsalted butter</ListItem>
      <ListItem>240 g sugar</ListItem>
      <ListItem>70 g unsweetened cacao powder</ListItem>
      <ListItem>1/2 tsp salt</ListItem>
      <ListItem>1 tsp vanilla essence</ListItem>
      <ListItem>2 eggs, cold</ListItem>
      <ListItem>70 g all-purpose flour</ListItem>
    </ul>
  </ListContainer>
</div>
<div>
  <h4 style={{ marginTop: '40px', marginBottom: '50px', color:'grey'}}>Instructions</h4>
  <OrderedListContainer>
    <ol>
      <OrderedListItem>Put the butter, sugar, cacao, salt, and vanilla essence in the bowl where you're going to whip them up later.</OrderedListItem>
      <OrderedListItem>Put the bowl on a bain-marie without touching the surface of the water until everything is melted and mixed together.</OrderedListItem>
      <OrderedListItem>Remove the bowl from the bain marie and wait 5min for it to cool down a bit. You should be able to touch the outside of the bowl without burning yourself.</OrderedListItem>
      <OrderedListItem>Mix using a stand or hand-held mixer and add the eggs one at a time. Mix until fully incorporated.</OrderedListItem>
      <OrderedListItem>Add the flour and mix for 2min on high speed.</OrderedListItem>
      <OrderedListItem>Line the mould with baking paper and take to a preheated oven at 160C for 20-30min or until you can insert a toothpick at the center and it comes out with a bit of dough (we don't want it to dry out completely).</OrderedListItem>
      <OrderedListItem>Let cool and cut.</OrderedListItem>
    </ol>
  </OrderedListContainer>
</div>
<div>
  <h4 style={{ marginTop: '30px', marginBottom: '30px', color:'grey'}}>Notes</h4>
  <p style={{marginBottom:'30px', color:'#DB7093'}}>*A follower told me they freeze quite well 🙂</p>
</div>

          </RecetaContainer>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default BrownieRecipe;
