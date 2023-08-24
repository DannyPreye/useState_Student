import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeSection = ({ title, recipes }) => {
    return (
        <div>
            <h2 className='font-montez text-[50px] text-c12'>{title}</h2>
            <div className=' flex flex-wrap items-stretch gap-[42px]'>
                {recipes?.map((recipe, id) => (
                    <RecipeCard
                        title={recipe.title}
                        readyTime={recipe.readyInMinutes}
                        image={recipe.image}
                        id={recipe.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecipeSection;
