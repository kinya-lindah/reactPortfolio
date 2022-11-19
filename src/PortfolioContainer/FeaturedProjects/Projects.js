import React from 'react';
import FeaturedProjects from './FeaturedProjects';
import {allProjectsData} from './Data';

export default function index(props) {
    return (
        <div id="projects">
           {allProjectsData.map((project, i)=> <FeaturedProjects key={i} project={project} openModal ={props.openModal} setOpenModal={props.setOpenModal} /> )}
        </div>
    )
}
