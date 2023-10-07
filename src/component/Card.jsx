import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div
      key={props.category.idCategory}
      className="flex flex-col justify-center items-center gap-3"
    >
      <img
        src={props.category.strCategoryThumb}
        alt=""
        className="w-[110px] h-[110px] rounded-full"
      />
      <p>{props.category.strCategory}</p>
      <button className="px-3 bg-orange-300 font-light text-sm text-white rounded-3xl">
        <Link to="/recipe-app/categorymeal" state={props.category.strCategory}>
          Discover
        </Link>
      </button>
    </div>
  );
};

export default Card;
