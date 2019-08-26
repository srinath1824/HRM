import React from 'react'
import { yellow } from '@material-ui/core/colors';

function Footer() {
    const footerstyle = {
        position:'absolute',
        bottom:'0',
        width:'100%',
        height:'60px',   /* Height of the footer */
        textAlign:'center',
        backgroundColor: '#ccffcc',
        padding: '20px'
    }
    return (
        <div>
            <h5 style={footerstyle}>@2019 Copyrights Technocomplnc. All Rights Reserver</h5>
        </div>
    )
}

export default Footer;