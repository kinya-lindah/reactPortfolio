import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import FeaturedProjects from './FeaturedProjects';
import { allProjectsData } from './Data';
import ProjectCarousel from './ProjectCarousel';


export default function Index(props) {
    const [clickedProject, setClickedProject] = useState([])
    return (
        <div id="projects">
            {allProjectsData.map((project, i) => <FeaturedProjects key={i} project={project} openModal={props.openModal} setOpenModal={props.setOpenModal} setClickedProject={setClickedProject} />)}
            <Dialog open={props.openModal}
                onClose={() => props.setOpenModal(false)}>
                    Wrapped
                <ProjectCarousel pictures={[[clickedProject.picture1,clickedProject.alt1 ],[ clickedProject.picture2,clickedProject.alt2], [clickedProject.picture3, clickedProject.alt3], [clickedProject.picture4, clickedProject.alt4], [clickedProject.picture5, clickedProject.alt5]]} ></ProjectCarousel>
                Finished
            </Dialog>
        </div>
    )
}
