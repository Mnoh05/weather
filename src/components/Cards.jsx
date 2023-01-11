import React from 'react';


import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            key={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      
      <div>
        <alert>Error</alert>
      </div>
    )
  }
}