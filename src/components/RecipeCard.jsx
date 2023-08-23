import React from "react";
import { BiTime } from "react-icons/bi";
import { Link } from "react-router-dom";

const RecipeCard = ({ image, title, country, readyTime, id }) => {
    return (
        <Link to={`/recipe/${id}`} className='w-full max-w-[215px] '>
            <div className='w-full h-[197px] flex flex-col items-center justify-end py-4 relative bg-gradient-to-t from-black to-transparent'>
                <img
                    src={image}
                    alt={title}
                    className='absolute top-0 left-0 w-full h-full '
                />
                <h3 className='font-montez text-[50px]'>{country}</h3>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-[15px] '>{title}</h3>
                  {
                    readyTime &&   <p className='flex text-[10px] items-center object-cover'>
                    <BiTime />
                    <span>{readyTime} Minutes</span>
                </p>
                  }
                </div>
                <div></div>
            </div>
        </Link>
    );
};

export default RecipeCard;
