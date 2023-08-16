import React from "react";
import { BiLogIn, BiSolidUser } from "react-icons/bi";
import Lower from "./Lower";

const Nav = () => {
    return (
        <>
            <header className='bg-black py-[13px] px-[137px] text-white'>
                <div className='container mx-auto flex justify-between items-center'>
                    <ul
                        className='flex items-center text-[10px]
                 font-montserrat font-bold gap-[37px]'
                    >
                        <li>COMMUNITY</li>
                        <li>BOOKS</li>
                        <li>RECIPE INDEX</li>
                        <li>POPULAR</li>
                    </ul>
                    <ul
                        className='flex items-center text-[10px]
                 font-montserrat font-bold gap-[37px]'
                    >
                        <Authlinks Icon={BiLogIn} text={"REGISTER"} />
                        <Authlinks Icon={BiSolidUser} text={"LOGIN"} />
                    </ul>
                </div>
            </header>
            <Lower />
        </>
    );
};

const Authlinks = ({ Icon, text }) => {
    return (
        <li className='flex items-center gap-2'>
            <Icon className='text-c1a text-[10px]' />
            <span>{text}</span>
        </li>
    );
};
export default Nav;
