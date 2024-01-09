import React from 'react';

const Search = () => {
    return (
        <div className='mb-20'>
            <h1 className='flex justify-center font-bold text-5xl m-10 mb-14'>I Grow By Helping People In Need</h1>
            <div className='flex justify-center'>
                <input type="text" placeholder="Search here..." className="input input-bordered w-full max-w-xs rounded-none h-12" />
                <button className="btn btn-error bg-[#ff444a] rounded-none text-white ">Search</button>
            </div>

        </div>
    );
};

export default Search;