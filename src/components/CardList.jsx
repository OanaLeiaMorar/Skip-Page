import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import Button from "./Button";


const CardList = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then((response) => response.json())
      .then((data) => setSkips(data.slice(0, 10)))
      .catch((error) => console.error("Error fetching skips:", error));
  }, []);

  const handleCheck = (id) => {
    setSelectedSkip(id); 
    setTimeout(() => {
      buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200); 
  };

  return <>
    <div className="card-list">
      {skips.map((skip, index) => (
       <Card 
       key={skip.id} 
       title={`${skip.size} Yard Skip`} 
       description={
         <>
           <span className="card-price">£{skip.price_before_vat}</span> +VAT per week | {skip.hire_period_days} day hire period
         </>
       } 
       isChecked={selectedSkip === skip.id}
       onCheck={() => handleCheck(skip.id)}
     />
      ))} 
      </div>
       <div className="container" ref={buttonRef}>
        <Button />
      </div>
   
  </>
};

export default CardList;