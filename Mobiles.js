import React from 'react';
import iphone from './images/iphone.jpeg';
import Samsung from './images/Samsung.jpeg';
import Redmi from './images/Redmi.jpeg';
import Poco from './images/Poco.jpeg';
import Mobilecards from './Mobilecards';

const Mobiles = () => {
  const mobileData = [
    {
      brand: "Iphone",
      img: iphone,
      model: "Iphone 14",
      price: "75000",
      available: true
    },
    {
      brand: "Samsung",
      img: Samsung,
      model: "Samsung M33 5G",
      price: "45000",
      available: true
    },
    {
      brand: "Redmi",
      img: Redmi,
      model: "Redmi A20",
      price: "35000",
      available: true
    },
    {
      brand: "Poco",
      img: Poco,
      model: "Poco 3",
      price: "35000",
      available: false
    },
  ];

  return (
    <div> <center>
      {mobileData.map(
        (props)=><h6 key={props.brand}>
          <Mobilecards props={props} />
       </h6>
      )}
      </center> </div> 
  );
  };
export default Mobiles;
