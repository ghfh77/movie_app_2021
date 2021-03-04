import React from 'react';

function Food({fav,picture}) {
  return (
    <div>
      <h1>I like {fav}</h1>;
      <img src= {picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg"
  },
  {
    name: "samgyupsal",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/03/43/72/4e/palsaik-samgyupsal-korean.jpg"
  },
  {
    name: "bibim",
    image: "https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg"
  },
  {
    name: "donka",
    image: "https://www.maangchi.com/wp-content/uploads/2015/02/donkkaseu-plate.jpg"
  },
  {
    name: "kimbap",
    image: "https://www.thespruceeats.com/thmb/aPsmbaRgCtFLUTUFGXZBIAW93H8=/3797x2848/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg"
  },
];

function App() {
  return  (
  <div>
    {foodILike.map(dish => 
      (<Food fav = {dish.name} picture={dish.image} /> )
      )}
  </div>
  );   
}

export default App;
