import React from 'react';
import FeaturedProjects from './FeaturedProjects';
import {homeObject1, homeObject2,homeObject3} from './Data';




export default function index() {
    
  
    return (
        <div id="projects">
           
            <FeaturedProjects {...homeObject1}/>
            <FeaturedProjects {...homeObject2} />
            <FeaturedProjects {...homeObject3} />
            
            
        </div>
    )
}
