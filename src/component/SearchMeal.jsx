import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";

const SearchMeal = () => {
  const location = useLocation();

  const [query, setQuery] = useState(location.state);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    setQuery(location.state);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error.message));
  }, [query, location]);

  const meales = meals.map((item, index) => {
    return (
      <div
        key={index}
        className="flex flex-col justify-center items-center gap-4"
      >
        <img
          className="w-[100px] rounded-full"
          src={item.strMealThumb}
          alt=""
        />
        <button className="w-fit text-sm px-3 py-2 bg-orange-300 rounded-3xl">
          <Link to="/recipe-app/recipeDetails" state={item.idMeal}>
            Discover
          </Link>
        </button>
      </div>
    );
  });

  console.log("changed :", location.state);
  return (
    <>
      <Header />
      <section className="relative px-24 flex flex-col justify-center items-center gap-4 my-24">
        <h2 className="font-bold text-[40px]">Search result for : {query}</h2>
        <article className="flex flex-wrap justify-start items-center gap-8 px-4 py-4 shadow-md bg-orange-100 rounded-3xl w-full overflow-hidden">
          {meales}
        </article>
      </section>
    </>
  );
};

export default SearchMeal;
