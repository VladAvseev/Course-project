import React from 'react';
import '../App.css';

const Search = () => {
    return (
        <div>
            <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder='Search'
                style={{width: '100%'}}
            />
            <div className='sort-menu'>
                <div className='test'/>
                <div className='test'/>
                <div className='test'/>
                <div className='test'/>
            </div>
        </div>
    );
};

export default Search;