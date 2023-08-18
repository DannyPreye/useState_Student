import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt} from "react-icons/fa";
import { GrFormSearch } from "react-icons/gr";

const Lower = () => {
    return (
        <div className='flex items-center justify-between container mx-auto px-[112px] py-[5px]'>
            <Link to={"/"}>
                <img src='/assets/logo.png' alt='' />
            </Link>
            <div className="flex items-center">
                <input type="text" placeholder="Search" className="border-[1px] border-gray-200 w-[600px] rounded-l-2xl p-1 ps-8 text-gray-200"/>
                <GrFormSearch className="bg-slate-300 w-10 h-[2.1rem] rounded-r-2xl"/>
            </div>
            <div>
                
            <ul className="flex gap-5">
                        <Cart Icon={FaShoppingCart} />
                        <Cart Icon={FaUserAlt} />
                        
                    </ul>
            </div>

        </div>
    );
};

const Cart = ({Icon}) => {
    return (
        <li>
            <Icon  />
        </li>
    );
};

export default Lower;
