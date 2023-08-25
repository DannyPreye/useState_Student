import React from "react";
import { Link } from "react-router-dom";

const filterText = [
    {
        title: "Diet",
        links: [
            {
                name: "Dairy Free",
                href: "/category/diary-free",
            },
            {
                name: "Egg Free",
                href: "/category/egg-free",
            },
            {
                name: "Sugar Free",
                href: "/category/sugar-free",
            },
            {
                name: "Gluten Free",
                href: "/category/gluten-free",
            },
        ],
    },
    {
        title: "Allergies",
        links: [
            {
                name: "Glutten",
                href: "/category/glutten",
            },
            {
                name: "Legumes",
                href: "/category/legumes",
            },
            {
                name: "Grain",
                href: "/category/grain",
            },
            {
                name: "Fruits",
                href: "/category/fruit",
            },
        ],
    },
    {
        title: "Cussines",
        links: [
            {
                name: "Assian",
                href: "/category/assian",
            },
            {
                name: "Italian",
                href: "/category/italian",
            },
            {
                name: "China",
                href: "/category/china",
            },
            {
                name: "Thai",
                href: "/category/thai",
            },
        ],
    },
    {
        title: "Goals",
        links: [
            {
                name: "Weightloss",
                href: "/category/weightloss",
            },
            {
                name: "Freshness",
                href: "/category/freshness",
            },
            {
                name: "Activeness",
                href: "/category/activeness",
            },
            {
                name: "Rich Nutritions",
                href: "/category/rich-nutritions",
            },
        ],
    }
];
const HomepageLeft = ({}) => {
    return (
        <div className=''>
            <h2 className='text-c12 text-[50px] font-montez'>Filter Recipe</h2>
            <FilterText arr={filterText} />
        </div>
    );
};

const FilterText = ({ arr }) => {
    return (
        <div className='grid gap-[7px]  '>
            {arr.map((item, key) => (
                <>
                    <h2 className='text-[30px] mt-[39px] font-montserrat font-[500] text-c12'>
                        {item.title}
                    </h2>
                    {item.links.map((link, id) => (
                        <Link
                            className='text-[20px] font-montserrat hover:text-c12 hover:font-bold  focus:text-c12 focus:font-bold '
                            to={link.href}
                        >
                            {link.name}
                        </Link>
                    ))}
                </>
            ))}
        </div>
    );
};

export default HomepageLeft;
