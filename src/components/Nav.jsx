import React from 'react';
import SearchBar from "./SearchBar"

function Nav ({onSearch}) {

    return(
        <div className='header'>
            <ul className='ul'>
                <li className='logo'>Weather App</li>
                <li className='busqueda'>
                    <div>
                        <SearchBar onSearch = {onSearch} />
                    </div>
                </li>
            </ul>
       </div>
    )
    
}


export default Nav;