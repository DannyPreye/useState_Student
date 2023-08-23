import React, { useEffect, useState } from "react";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import HomepageLeft from "../components/HomepageLeft";
import RecipeSection from "../components/RecipeSection";



const API_KEY = process.env.REACT_APP_API_KEY;
const Homepage = () => {
    const [cuisine, setCuisine] = useState([]);
    const [pasta, setPasta] = useState([]);
    const [steak, setSteak] = useState([]);
    
        const fetchCuisine = async () => {
            const res = await fetch(
               ` https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=3`
                );
                const data = await res.json();
                setCuisine(data.recipes);
            };

        const fetchPasta = async () => {
            const res = await fetch(
              ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=pasta&maxFat=25&number=3`
                );
                const data = await res.json();
                    setPasta(data.results);
                };
            
            console.log(pasta)
            
        const fetchSteak = async () => {
            const res = await fetch(
                ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=steak&maxFat=25&number=3`
                    );
                    const data = await res.json();
                    setSteak(data.results);
                };
            

            
        useEffect(() => {
            fetchPasta();
            fetchCuisine()
            fetchSteak()
        }, []);

    return (
        <div className=''>
            <div
                className='w-full pt-[118px] pb-[164px] '
                style={{
                    background: "url(/assets/background.png) no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className='flex justify-between mt-39 mb-45'>
                    <div className='flex flex-col items-center justify-center w-fit'>
                        <h2 className='text-[white] text-[60px] p-7 pl-12'>
                            Meat <span className='font-bold'>Chicken</span>
                        </h2>
                        <button className='border-[2px] border-[#D9D9D9] text-[white] text-[55px] w-[250px]'>
                            More
                        </button>
                    </div>
                    <div>
                        <FaFacebookF className='w-[63px] h-[89px] text-[white] bg-[blue]' />
                        <TiSocialYoutube className='w-[65px] h-[88px] text-[white] bg-[red]' />
                        <BsTwitter className='w-[64px] h-[89px] text-[white] bg-[#4dafe7]' />
                        <FaPinterestP className='w-[59px] h-[82px] text-[white] bg-[#a52c2c]' />
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex px-5 mt-[34px] items-start gap-8 '>
                <div className='flex-shrink-0 mr-[100px]'>
                    <HomepageLeft />
                </div>
                <div className="grow mr-[100px] ">
                    <RecipeSection title='Cuisine' recipes={cuisine} />
                    <RecipeSection title='Pasta' recipes={pasta} />
                    <RecipeSection title='Steak' recipes={steak} />
                </div>
                <div className="mt-[300px]">
                    <img src="/assets/Fruit.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Homepage
