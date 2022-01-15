import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { color1 } from '../../AppVariables';

export default function NotFound() {
    return (
        <div style={{display:'flex', flexDirection:'column', height:'100vh', paddingTop: '100px'}}>
             <h1 style={{color:color1}}> 404 Page Not Found</h1>
            <LinkRouter to="/reactPortfolio"> Return to home page</LinkRouter>
        </div>
    )
}
