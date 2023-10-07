import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const RecipeDetails = (props) => {
  const location = useLocation();
  console.log(location.state);
  const [ids, setIds] = useState(location.state);
  const [meal, setMeal] = useState("");
  let newIngredientList = [];

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ids}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));

    // newIngredientList.length = 0;
  }, []);
  for (let index = 1; index <= 20; index++) {
    let name = `strIngredient${index}`;
    newIngredientList.push(meal[name]);
  }
  console.log(meal);
  return (
    <>
      <Header />
      <section className="h-screen flex flex-col justify-between items-center gap-2 px-24 ">
        <h2 className="text-[60px] font-bold leading-[60px] py-24 mx-auto text-center">
          {meal.strMeal}
        </h2>
        <div className="h-screen flex justify-between items-center gap-2 px-24">
          <article className="flex flex-col gap-5 justify-between w-1/2">
            <h3 className="text-[60px] font-bold leading-[60px]">
              Ingredients
            </h3>
            <p className="text-xl font-normal">Recipe From {meal.strArea}</p>
            <ul>
              {newIngredientList.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </article>
          <article className="w-1/2">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-3xl shadow-lg"
            />
          </article>
        </div>
        <h4 className="text-[60px] w-full px-24 py-8 text-left font-bold leading-[60px]">
          Instructions
        </h4>
        <p className="font-semibold text-lg text-left leading-8 py-12 px-24">
          {meal.strInstructions}
        </p>
      </section>
    </>
  );
};

export default RecipeDetails;
