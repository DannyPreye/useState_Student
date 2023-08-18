import React from "react";
import { FaFacebookF, FaPinterestP} from "react-icons/fa";
import { TiSocialYoutube} from "react-icons/ti";
import { BsTwitter} from "react-icons/bs";
import { Link } from "react-router-dom";


const Homepage = () => {
    return <>
        <div 
        className="w-full pt-[118px] pb-[164px] "
        style={{
            background: "url(/assets/background.png) no-repeat",
            backgroundSize:"cover" 
        }}>
            <div className="flex justify-between mt-39 mb-45">
                <div className="flex flex-col items-center justify-center w-fit">
                    <h2 className="text-[white] text-[60px] p-7 pl-12">Meat <span className="font-bold">Chicken</span></h2>
                    <button className="border-[2px] border-[#D9D9D9] text-[white] text-[55px] w-[250px]">More</button>
                </div>
                <div>
                    <FaFacebookF className="w-[63px] h-[89px] text-[white] bg-[blue]"/>
                    <TiSocialYoutube className="w-[65px] h-[88px] text-[white] bg-[red]"/>
                    <BsTwitter className="w-[64px] h-[89px] text-[white] bg-[#4dafe7]"/>
                    <FaPinterestP className="w-[59px] h-[82px] text-[white] bg-[#a52c2c]"/>
                </div>
            </div>
        </div>

        <div className="mt-10 ml-[50px]">
            <div className="">
                <h2 className="font-montez text-[60px] text-[green]">Filter Recipes</h2>

            </div>
            <div></div>
            <div></div>
        </div>
    </>;
};

const links =[
    {
        name:"Dairy Free",
        link:"/category/diary-free"
    }
]

const FilterText = ({heading, links}) => {
    return (
        <div>
            <h2>{heading}</h2>
            <ul>
                {links.map((item, id)=>(
                    <li>
                        <Link to={item.link}></Link>
                    </li>
                ))}
            </ul>
        </div>
        
            
    );
};

export default Homepage;
