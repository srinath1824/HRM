import React from 'react'

export default function Header() {
    const pStyle = {
        // border: '5px solid pink',
        textAlign: 'center',
        backgroundColor: '#ccffcc',
        padding: '10px',
        color: 'dodgerblue'
    }
    return (
        <div>
            <h1 style={pStyle}>TechnoComp</h1>
        </div>
    )
}
