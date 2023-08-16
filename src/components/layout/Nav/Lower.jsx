import React from "react";
import { Link } from "react-router-dom";

const Lower = () => {
    return (
        <div className='flex items-center justify-between container mx-auto px-[112px] py-[5px]'>
            <Link to={"/"}>
                <img src='/assets/logo.png' alt='' />
            </Link>
        </div>
    );
};

export default Lower;
