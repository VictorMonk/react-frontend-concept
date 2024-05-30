import React from 'react';
import Navigation from './Navigation';


const Header = () => {
    return (
        <header className="px-8 flex items-center justify-between bg-gray-200 py-4 px-6 sticky top-0">
            <div className="flex items-center" ><p>Header Logo</p></div>
            <div className="flex items-center"><Navigation variant="header" /></div>
        </header>
    )

};

export default Header;