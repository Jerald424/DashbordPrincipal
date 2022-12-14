import React from 'react'
import StickyBox from "react-sticky-box";
import Sidebar from '../Layout/sidebar/Sidebar';


export default function Main({ children }) {
    return (
        <div>
            <div className='row p-0 m-0 '>
                <div className='col-md-2 d-none d-lg-block ' style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <StickyBox offsetTop={20} offsetBottom={20}>
                        <Sidebar />
                    </StickyBox>
                </div>
                <div className='col-md-10'>
                    {children}
                </div>
            </div>
        </div>
    )
}
