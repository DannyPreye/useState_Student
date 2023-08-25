import React, { useState } from "react";
import { BiTime } from "react-icons/bi";
import { Link } from "react-router-dom";

const DetailCard = ({ detail }) => {
  const [currentMenu, setCurrentMenu] = useState("Instructions");
  console.log(detail)
  return (
    <div className="container mx-auto flex items-start px-5 py-[80px] gap-8 ">
      <div
        className="min-h-[500px] h-full max-w-[450px] grid 
        place-items-center w-full bg-gradient-to-b from-gray-200
         to-transparent rounded-[12px] overflow-hidden"
      >
        <img
          src={detail.image}
          alt=""
          className="object-contain h-full w-full"
        />
      </div>
      <div className="w-[60%] ml-8 flex-col gap-4">
        <div className="flex gap-3 items-center justify-center">
          {["Instructions", "Ingredients"].map((title) => (
            <div>
              <button
                onClick={() => setCurrentMenu(title)}
                className="text-3xl font-bold group relative font-montez"
              >
                {title}
                <span
                  className={`${
                    title === currentMenu ? "block" : "hidden"
                  }  absolute -bottom-2 left-0 w-full h-[4px] bg-c12`}
                ></span>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8">
          {currentMenu === "Instructions" ? (
            <>
              <div
                className="list-decimal instruction text-lg"
                dangerouslySetInnerHTML={{ __html: detail.instructions }}
              ></div>
            </>
          ) : (
            <div className="instruction">
              <ol className="grid gap-3">
                {detail.extendedIngredients.map((ingredient) => (
                  <li className="flex gap-2 items-center">
                    <span className="capitalize font-semibold font-monte">
                        {ingredient.originalName}
                    </span>: <span>{ingredient.amount} {ingredient.unit}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

const Menus = ({ menuTitle, children }) => {
  return <div></div>;
};
