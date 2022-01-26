import React, { useState } from 'react';
import '../src/button/button.css';




export default function App () {
  
  const [ user1 ] = useState({
    name: "Ivan",
    years: "30 godina.",
    
  });
  const [ user2 ] = useState({
    name: "Marko",
    years: "35 godina.",
    
  });
  const [ user3 ] = useState({
    name: "Ana",
    years: "25 godinu.",
    
  });

  return(
    <>
      <p>
      Moje ime je {user1.name} i imam {user1.years} <br/>
      Moje ime je {user2.name} i imam {user2.years} <br/>
      Moje ime je {user3.name} i imam {user3.years} 
      </p>
    </>
  )


}