import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "React-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // search recipe on submit
    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    //   .then((res) => res.json())
    //   .then((data) => setRecipes(data.meals))
    //   .catch((error) => console.log(error.message));
  };

  // console.log("list is ", list);
  return (
    <header className="w-full flex justify-between px-24 py-5 shadow-md">
      <a href="/" className="text-3xl font-bold">
        Recipe
      </a>
      <nav className="flex justify-center items-center gap-4 mr-80">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
      <form
        className="flex justify-center items-center gap-2"
        // onSubmit={handelSubmit}
      >
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-2 border-orange-100 border-2 rounded-3xl py-2"
        />
        <button
          className="flex justify-center items-center p-2 absolute right-28"
          type="submit"
          onClick={handelSubmit}
        >
          <AiOutlineSearch size={25} className="text-orange-100 " />
          <Link to="/recipe-app/searchmeal" state={query}>
            click
          </Link>
        </button>
      </form>
    </header>
  );
};

export default Header;
