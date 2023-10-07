import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Bestmeals = () => {
  const [bestmeals, setBestmeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((res) => res.json())
      .then((data) => setBestmeals(data.meals));
  }, []);

  return (
    <section className="relative px-24 flex flex-col justify-center items-center gap-4 my-24">
      <h2 className="font-bold text-[40px]">Best Meals Selection</h2>
      <article className="flex flex-wrap justify-start items-center gap-8 px-4 py-4 shadow-md bg-orange-100 rounded-3xl w-full overflow-hidden">
        {bestmeals.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4"
            >
              <Link to="/recipe-app/recipeDetails" state={item.idMeal}>
                Discover
              </Link>
              <img
                className="w-[100px] rounded-full"
                src={item.strMealThumb}
                alt=""
              />
              {/* <p className="max-w-[110px]">{item.strMeal}</p> */}
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Bestmeals;
