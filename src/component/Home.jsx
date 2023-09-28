import React, { useState, useEffect } from "react";

const Home = () => {
  const [query, setQuery] = useState("a");
  const [recipes, setRecipes] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();

    //search recipe on submit
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`)
      .then((res) => res.json())
      .then((data) => console.log(data.meals))
      .catch((error) => console.log(error.message));
  };

  return (
    <section>
      <form className="text-center py-10" onSubmit={handelSubmit}>
        <input
          className="border-2 p-5"
          type="text"
          placeholder="Serch recipe here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="px-8 py-5 bg-green-500 text-white border-2"
          type="submit"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Home;
