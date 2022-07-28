import React from 'react'
import Main from '../Main'
import "./student.css"
import StickyBox from "react-sticky-box"

export default function Student() {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Main>
                <div style={{ border: '3px solid green' }}>
                    hello
                </div>
            </Main>
        </div>
    )
}
