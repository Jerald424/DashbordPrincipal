import React from 'react';
import Sidebar from './sidebar/Sidebar';

const Layout = ({ children }) => {
    console.log('children: ', children);
    return (
        <div className='row p-0 w-100 p-3'>
            <div className=' col-md-3 p-0'>
                <Sidebar />
            </div>
            <div className='col-md-9 p-0 '>
                {children}
            </div>
        </div>
    );
};

export default Layout;