import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between px-10 py-5">
      <a href="/" className="text-3xl font-bold">
        Recipe
      </a>
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
