import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);
  return (
    <section className="flex flex-col justify-center items-center gap-4 my-24 max-w-full">
      <h2 className="font-bold text-[40px]">CATEGORIES</h2>
      <article className="flex justify-center items-center gap-4 py-4 shadow-md bg-orange-100 rounded-3xl w-full overflow-x-hidden">
        <Splide
          style={{ overflow: "hidden" }}
          options={{
            width: "80%",
            perPage: 6,
            perMove: "1",
            gap: "1rem",
            arrows: "true",
            rewind: true,
          }}
        >
          {categories.map((item) => {
            return (
              <SplideSlide key={item.idCategory}>
                <Card category={item} />
              </SplideSlide>
            );
          })}
        </Splide>
      </article>
    </section>
  );
};

export default Category;
