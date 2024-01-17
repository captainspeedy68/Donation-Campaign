import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from "react";
import { useCategoryContext } from "../../Context/CategoryContextProvider.jsx";

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const {updateCategory} = useCategoryContext();
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    
    const handleSearchCategory = () => {
        updateCategory(inputValue);
    }
    return (
        <div className='mb-20'>
            <h1 className='flex justify-center font-bold text-5xl m-10 mb-14'>I Grow By Helping People In Need</h1>
            {/* <h1>{inputValue}</h1> */}
            <div className='flex justify-center'>
                <input type="text" onChange={handleInputChange} placeholder="Search here..." className="input input-bordered w-full max-w-xs rounded-none h-12" />
                <button onClick = {handleSearchCategory} className="btn btn-error bg-[#ff444a] rounded-none text-white ">Search</button>
            </div>

        </div>
    );
};

export default Search;