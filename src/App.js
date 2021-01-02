import React from 'react';
import {RandomMeal} from './Components';


///Todo 
/*
1.Search for meals
2.Display the results
3.Radom / Featured meals
BONUS:
--Favorite recipe
*/ 

function App() {
  return (
    <div className="App">
         <section className="container">
           <RandomMeal />
         </section>
    </div>
  );
}

export default App;
