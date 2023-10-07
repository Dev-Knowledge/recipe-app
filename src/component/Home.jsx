import React, { useEffect, useState } from "react";
import Header from "./Header";
import Category from "./Category";
import Bestmeals from "./Bestmeals";
import { Link } from "react-router-dom";

const Home = () => {
  const [meal, setMeal] = useState("");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);
  return (
    <>
      <Header />

      <section className="h-screen flex flex-col justify-between items-center gap-2 px-24 ">
        <div className="h-screen flex justify-between items-center py-4 gap-2 px-24">
          <article className="flex flex-col gap-5 justify-between w-1/2">
            <h2 className="text-xl font-normal">Random Recipe of the Day</h2>
            <h3 className="text-[60px] font-bold leading-[60px]">
              {meal.strMeal}
            </h3>
            <p className="text-xl font-normal">Recipe From {meal.strArea}</p>
            <button className="w-fit px-3 py-2 bg-orange-300 rounded-3xl">
              <Link to="/recipe-app/recipeDetails" state={meal.idMeal}>
                Get Details
              </Link>
            </button>
          </article>
          <article className="w-1/2">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-3xl shadow-lg"
            />
          </article>
        </div>
        <Category />
        <Bestmeals />
      </section>
    </>
  );
};

export default Home;
