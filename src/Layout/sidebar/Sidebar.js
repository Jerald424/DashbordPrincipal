import React from 'react'
import "./sidebar.css"


export default function Sidebar() {
    const checkBoxData = [
        { type: 'checkbox', label: 'Collage Name' },
        { type: 'checkbox', label: 'Collage Name' },
        { type: 'checkbox', label: 'Collage Name' },
        { type: 'checkbox', label: 'Collage Name' },
        { type: 'checkbox', label: 'Collage Name' },
    ]
    return (
        <div className='left-side-bar'>
            <div className='search-part'>
                <img src={require("../../assets/search.png")} className="search-icon" />
                <input type="text" className='search-box' placeholder='Search any....' />
            </div>
            <div className='check-box-part'>
                {
                    checkBoxData.map(res => {
                        return (
                            <div className='seperate-checkbox-label'>
                                <input type={res.type} className="checkbox-input" />
                                <label className='check-box-label' >{res.label}</label>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}
