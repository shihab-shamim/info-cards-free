  
  

import Cards from './Cards';
  
  
  
  export  function getCardContentFront(attributes) {
  
    return (
      <Cards
        attributes={attributes}
        clientId={attributes.clientId}
      />
    );
  
 
}

