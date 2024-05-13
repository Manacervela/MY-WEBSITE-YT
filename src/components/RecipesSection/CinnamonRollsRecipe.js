import React, { useEffect, useState } from 'react';
import { RecetaContainer, RecetaImagen, Containerh3, ContainerP2, GoToHomeLink, PageContainer, ContentContainer, ListContainer, ListItem, OrderedListContainer, OrderedListItem } from './BrownieElements';
import donutsImage2 from '../../images/cinamon.jpg';
import donutsImage from '../../images/cinnamon2.jpg'; 
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
            <h2 style={{ letterSpacing: '1px', lineHeight: '1.4' }}>GOOEY AND SOFT CINNAMON ROLLS</h2>
            <p style={{ letterSpacing: '0.5px', lineHeight: '1.6', marginTop: '40px', maxWidth: 'auto', textAlign: 'center', color:'rgb(128 128 128)' }}>If there’s a sweet I cannot stop myself from eating it’s cinnamon rolls. That being said I’m also super picky about how I like them. I love them when they’re gooey and soft and you can pull the layers with your hands easily.</p>
            <img src={donutsImage} alt="Donuts" width={350} height={400} style={{ marginTop: '40px' }} />
          </div>
          <div style={{ marginTop: '40px', marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ letterSpacing: '0.5px', lineHeight: '1.6', textAlign: 'center', color:'rgb(128 128 128)' }}>I actually eat these with my hands because somehow they taste better. Don’t judge me, okay? It’s just how I’ve always done it and love it ;). I made several attempts to get the perfect recipe and I loooove the result.</p>
          <img src={donutsImage2} alt="Donuts" width={300} height={500} style={{ marginTop: '40px' }} />
          </div>
           <RecetaContainer style={{ borderWidth: '10px', borderStyle: 'solid', borderColor: '#ffffff', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', margin: '200px auto 0 auto', maxWidth: '800px', padding: '0 10px' }}>
            <RecetaImagen src={donutsImage} alt="Donuts" width={200} height={100} style={{ borderWidth: '20px', borderStyle: 'solid', borderColor: '#ffffff', borderRadius: '40px', position: 'absolute', top: '-10%', left: '50%', transform: 'translate(-50%, -10%)' }} />
            <div>
              <GoToHomeLink to="/">Go to Home</GoToHomeLink>
              <Containerh3>Homemade Glazed Donuts Recipe</Containerh3>
              <div>
              <ContainerP2>
              Course: Breakfast, Brunch, Dessert | Cuisine: Medium | Prep Time: 30 minutes | Cook Time: 20 minutes | Proofing time: 1 hour 30 minutes | Total Time: 40 minutes | Servings: 15 cinnamon rolls.
              </ContainerP2>
              </div>
            </div>
            <div>
  <h4 style={{ marginTop: '40px', marginBottom: '10px', color:'grey' }}>Ingredients</h4>
  <ListContainer>
    <ul>
      <ListItem>500 g all-purpose flour</ListItem>
      <ListItem>1½ tsp salt</ListItem>
      <ListItem>2¼ tsp instant dry yeast</ListItem>
      <ListItem>120 g sugar</ListItem>
      <ListItem>240 ml lukewarm milk</ListItem>
      <ListItem>60 g unsalted melted butter cooled to room temperature</ListItem>
      <ListItem>1 egg at room temperature</ListItem>
      <ListItem>½ tsp vanilla esence</ListItem>
   <div>
  <h4 style={{ marginTop: '40px', marginBottom: '10px', color:'grey' }}>For the sugar filling:</h4>
   <ul>
    <ListItem>220 g brown sugar</ListItem>
    <ListItem>2 tbsp ground cinnamon</ListItem>
    <ListItem>60 g melted unsalted butter cooled to room temperature</ListItem>
   </ul>
   </div>
   <div>
  <h4 style={{ marginTop: '40px', marginBottom: '10px', color:'grey' }}>For the cream cheese frosting</h4>
   <ul>
    <ListItem>110 g cream cheese at room temperature</ListItem>
    <ListItem>3 tbsp icing sugar</ListItem>
    <ListItem>½ tsp vanilla extract</ListItem>
    <ListItem>30 g whipping cream</ListItem>
   </ul>
   </div>
    </ul>
  </ListContainer>
</div>
<div>
  <h4 style={{ marginTop: '40px', marginBottom: '40px', color:'grey' }}>Instructions</h4>
  <OrderedListContainer>
    <ol>
      <OrderedListItem>Mix the lukewarm milk, eggs, vanilla essence and melted butter.</OrderedListItem>
      <OrderedListItem>Mix all the dry ingredients in a separate bowl and make a hole in the centre and add all the wet ingredients in the center.</OrderedListItem>
      <OrderedListItem>Mix everything until you have a uniform dough. It’s really sticky so don’t worry, that’s just the way this dough is 🙂 That makes them gooey at the end instead of bread-y and hard.</OrderedListItem>
      <OrderedListItem>Dust a surface with flour and place the dough on top. Also, dust some extra flour on the dough. Roll it out until it's 5mm thick. Make sure it's completely unstuck to the surface before starting to cut by lifting it completely from the table.</OrderedListItem>
      <OrderedListItem>Use cookie cutters to make a large circle and then a smaller one in the centre. Optimize the use of the dough as much as you can because the donuts resulting from when you re-stretch the scraps won't turn out as nice. Place each donut on a piece of parchment paper. This will help later when adding them to the oil so that they don't lose their shape.</OrderedListItem>
      <OrderedListItem>Let the dough rest for 1 hour covered in cling film or until it doubles its size. If it’s too cold, turn on your oven until it’s warm (not hot) inside and let it puff up there.</OrderedListItem>
      <h4 style={{ marginTop: '30px', marginBottom: '30px', color:'grey' }}>Assembly</h4>
      <OrderedListItem>Dust flour on a clean tabletop and roll the dough. Every couple of rolls make sure it’s not sticking and dust more flour underneath and on top. Roll it out to 2mm thick so that you get lots of rolls instead of just a couple thick ones. Try to keep it as rectangular as you can. At the very end make sure it’s not stuck and dust more flour if necessary so you can roll it with ease.</OrderedListItem>
      <OrderedListItem>Paint the melted butter on top evenly and reach every edge.</OrderedListItem>
      <OrderedListItem>Mix the sugar and cinnamon and spread it out as evenly as possible. Sprinkle it and then spread out any mountains of sugar by gently brushing them with your hand.</OrderedListItem>
      <OrderedListItem>Start rolling: first do it carefully so it’s nice and tight and once you have the first 2 complete rolls, you can just push it (still very tightly) so it rolls to the end.</OrderedListItem>
      <OrderedListItem>Cut the rolls (I did mine 4cm) and put them on a baking tray lined with baking paper at the bottom (this will help later so the sugar doesn’t stick, you’ll thank me!) and arrange them nicely. Keep a decent amount of space between them so that they can rise during proofing and after in the oven without becoming square.</OrderedListItem>
      <OrderedListItem>Let them sit for 30min*** (again, it helps if they’re in a warm environment) and then they go in the oven at 180°C/350°F for 20-30min or until they're golden on top.</OrderedListItem>
      <h4 style={{ marginTop: '30px', marginBottom: '30px', color:'grey' }}>For the cream cheese frosting</h4>
      <ol>
        <OrderedListItem>Whip together the cream cheese, vanilla and icing sugar.</OrderedListItem>
        <OrderedListItem>Add the cream little by little, whipping it in.</OrderedListItem>
        <OrderedListItem>Spread the frosting onto the rolls.</OrderedListItem>
      </ol>
    </ol>
  </OrderedListContainer>
</div>
<div>
  <h4 style={{ marginTop: '30px', marginBottom: '30px', color:'grey'}}>Notes</h4>
  <p style={{marginBottom:'30px', color:'#DB7093'}}>***If you want to proof the rolls overnight to bake them the next morning, the amount of yeast changes to 1 3/4 tsp. The final proofing time is 12 hours in the fridge and no more than 14 hours. After that time they go straight in the oven.</p>
</div>

          </RecetaContainer>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default DonutsRecipe;
