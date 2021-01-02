import React from 'react';

function Meal({ meal })
   {
            if(!meal) return null;


const {
    strMeal,
    strInstructions,
    strCategory,
    strMealThumb,
    strArea,
 } =meal;
    return (
       <div className="meal">
            <div className="meal-img">
            <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="meal-details">
              <h3 className="meal-title">{strMeal}</h3>
              <i class="fas fa-star fa-color"></i>
              <i class="fas fa-star  fa-color"></i>
              <i class="fas fa-star  fa-color"></i>
              <i class="fas fa-star  fa-color"></i>
              <i class="fas fa-star  fa-color"></i>
              <p className="meal-instruction">{strInstructions && strInstructions.substring(0,200) + "........"}</p>
              <ul className="meal-info">
                  <li>
                      Category
                      <strong>{strCategory}</strong>
                  </li>
                  <li>
                      Area 
                      <strong>{strArea}</strong>
                  </li>
              </ul> 
              <button className="btn">
                View Recipe <i className="fas fa-arrow-right"></i>
            </button>
            </div>
        </div>
    )
}

export default Meal
