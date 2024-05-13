import React, { useEffect, useState } from 'react';
import { RecetaContainer, RecetaImagen, Containerh3, ContainerP2, GoToHomeLink, PageContainer, ContentContainer, ListContainer, ListItem, OrderedListContainer, OrderedListItem } from './BrownieElements';
import donutsImage2 from '../../images/donuts1.jpg';
import donutsImage from '../../images/donuts2.jpg'; 
import styled from 'styled-components';

const Logo = styled.img`
  max-height: 150px;
  padding: 0px;
  position: fixed;
  top: ${(props) => (props.showLogo ? '10px' : '-200px')};
  left: 10px;
  z-index: 2;
  transition: top 0.3s ease-in-out;
`;

const DonutsRecipe = () => {
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
            <h2 style={{ letterSpacing: '1px', lineHeight: '1.4' }}>DONUTS</h2>
            <p style={{ letterSpacing: '0.5px', lineHeight: '1.6', marginTop: '40px', maxWidth: 'auto', textAlign: 'center', color:'rgb(128 128 128)' }}>By far, far, far, far my favourite donuts glazed ones. I’m not a fan of any other flavour. Although now that I think about it I like the ones filled with cinnamon apples, too, LOL. Anyway, when I have to pick I always go for the glazed ones. They’re the perfect mix of fluffy and sweet without it being overly sweet. I love that thin glaze that goes around the donut and becomes almost crispy.</p>
            <img src={donutsImage} alt="Donuts" width={350} height={400} style={{ marginTop: '40px' }} />
          </div>
          <div style={{ marginTop: '40px', marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ letterSpacing: '0.5px', lineHeight: '1.6', textAlign: 'center', color:'rgb(128 128 128)' }}>The glaze for classic glazed donuts is really simple to make by mixing icing sugar and milk. I advise that you don’t make it so thick. You can always add a second layer if you think it’s too thin. However, when it’s too thick it can be way too sweet and you won’t get that see-through effect. Once you glaze them, they go onto a cooling rack where the excess drips off. You can definitely pick up the excess glaze and use it on more donuts.</p>
          <img src={donutsImage2} alt="Donuts" width={300} height={500} style={{ marginTop: '40px' }} />
          </div>
           <RecetaContainer style={{ borderWidth: '10px', borderStyle: 'solid', borderColor: '#ffffff', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', margin: '200px auto 0 auto', maxWidth: '800px', padding: '0 10px' }}>
            <RecetaImagen src={donutsImage} alt="Donuts" width={200} height={100} style={{ borderWidth: '20px', borderStyle: 'solid', borderColor: '#ffffff', borderRadius: '40px', position: 'absolute', top: '-10%', left: '50%', transform: 'translate(-50%, -10%)' }} />
            <div>
              <GoToHomeLink to="/">Go to Home</GoToHomeLink>
              <Containerh3>Homemade Glazed Donuts Recipe</Containerh3>
              <div>
              <ContainerP2>
              Course: Bread, Dessert | Keyword: donuts, doughnuts, glaze, glazed | Prep Time: 30 minutes | Cook Time: 15 minutes | Proofing time: 1 hour 45 minutes | Total Time: 45 minutes | Servings: 10 – 12 donuts.
              </ContainerP2>
              </div>
            </div>
            <div>
  <h4 style={{ marginTop: '40px', marginBottom: '10px', color:'grey' }}>Ingredients</h4>
  <ListContainer>
    <ul>
      <ListItem>500 g all purpose flour + more to dust</ListItem>
      <ListItem>100 g sugar</ListItem>
      <ListItem>1½ tsp instant yeast or 3 tsp dry yeast or 6 tsp fresh yeast*</ListItem>
      <ListItem>1 1/2 tsp salt</ListItem>
      <ListItem>200 ml lukewarm water</ListItem>
      <ListItem>1 eggs</ListItem>
      <ListItem>40 ml milk any type</ListItem>
      <ListItem>60 g unsalted butter melted and cooled to room temperature</ListItem>
      <ListItem>vegetable oil</ListItem>
   <div>
  <h4 style={{ marginTop: '40px', marginBottom: '10px', color:'grey' }}>For the glaze</h4>
   <ul>
    <ListItem>300 g icing sugar</ListItem>
    <ListItem>as needed milk any type</ListItem>
   </ul>
   </div>
    </ul>
  </ListContainer>
</div>
<div>
  <h4 style={{ marginTop: '40px', marginBottom: '40px', color:'grey' }}>Instructions</h4>
  <OrderedListContainer>
    <ol>
      <OrderedListItem>In a bowl place the flour, yeast, salt and sugar. Add the water, egg, milk and butter and mix lightly with a spatula until it doesn’t help you anymore.</OrderedListItem>
      <OrderedListItem>Now you have two options: you can finish mixing by hand or with a stand mixer with the dough hook attached. If you mix by hand you need to then knead for 20 minutes or until the dough passes a window test. The test consists in taking a bit of the dough and carefully stretching it to form a windowpane. If a thin membrane forms where you can see the light on the other side without breaking then you're good to go. If not, you have to keep kneading a bit more. If you use a stand mixer mix on high speed for 10 minutes or until it passes the windowpane test.</OrderedListItem>
      <OrderedListItem>Cover the dough with a thin layer of vegetable oil to prevent it from drying and place it in a bowl. Cover it with a kitchen cloth and let it proof for one hour or until it has doubled in size. It's best to proof in a warm place like inside your oven with only the light on, for example.</OrderedListItem>
      <OrderedListItem>Dust a surface with flour and place the dough on top. Also, dust some extra flour on the dough. Roll it out until it's 5mm thick. Make sure it's completely unstuck to the surface before starting to cut by lifting it completely from the table.</OrderedListItem>
      <OrderedListItem>Use cookie cutters to make a large circle and then a smaller one in the centre. Optimize the use of the dough as much as you can because the donuts resulting from when you re-stretch the scraps won't turn out as nice. Place each donut on a piece of parchment paper. This will help later when adding them to the oil so that they don't lose their shape.</OrderedListItem>
      <OrderedListItem>Let them proof on the surface covered with a kitchen cloth for 30-45min or until doubled in size.</OrderedListItem>
      <OrderedListItem>You can re-knead the scraps of dough and let it rest for 20 minutes before rolling it back out.</OrderedListItem>
      <OrderedListItem>Pour enough vegetable oil into a pot so that it's 4 fingers high. Heat it up to 180°C/350°F or medium heat.</OrderedListItem>
      <OrderedListItem>Once nice and hot place a donut inside with the help of the parchment paper. Remove the paper once it's inside. Be careful not to burn yourself. It's going to float and we want to cook it for 1-2min per side or until golden.</OrderedListItem>
      <OrderedListItem>Remove the donut and place it onto a cooling rack. Repeat this process with all the donuts.</OrderedListItem>
      <OrderedListItem>Wait for them to cool down completely before advancing to the glaze or it will melt away.</OrderedListItem>
      <h4 style={{ marginTop: '30px', marginBottom: '30px', color:'grey' }}>For the glaze</h4>
      <ol>
        <OrderedListItem>Sieve the icing sugar into a bowl.</OrderedListItem>
        <OrderedListItem>Add the milk little by little while whisking. We want to have a consistency that's thick enough to cover the donuts but at the same time we want it to slide off a bit to get a thin layer in the end.</OrderedListItem>
        <OrderedListItem>Cover the donuts completely in the glaze.</OrderedListItem>
        <OrderedListItem>Let the excess of glaze drip off by placing the donuts on a cooling rack</OrderedListItem>
        <OrderedListItem>As soon as they dry out they will be ready to eat.</OrderedListItem>
      </ol>
    </ol>
  </OrderedListContainer>
</div>
<div>
  <h4 style={{ marginTop: '30px', marginBottom: '30px', color:'grey'}}>Notes</h4>
  <p style={{marginBottom:'30px', color:'#DB7093'}}>*If you’re using dry or fresh yeast you first need to mix it with the lukewarm water and sugar in a bowl. After 10min check if you see bubbles / foam forming. If there are bubbles or foam then you can go ahead and mix everything together. If not, you’re going to have to buy new yeast.</p>
</div>

          </RecetaContainer>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default DonutsRecipe;
