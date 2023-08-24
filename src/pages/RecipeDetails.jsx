import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailSection from "../components/DetailSection";
// import DetailSection from ".../components/DetailSection";


const RecipeDetails = () => {
    const params = useParams();
    const id = params.id;
    const [recipe, setRecipe] = useState({});

    const fetchSingleRecipe = async () => {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );

        const data = await res.json();

        setRecipe(data);
    };

    // console.log(recipe);
    useEffect(() => {
        fetchSingleRecipe();
    }, []);

    return <div>
        {/* <RecipeDetails   /> */}
        {/* <DetailSection detail={recipe} /> */}
    </div>;
};

export default RecipeDetails;
