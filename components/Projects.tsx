import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blogImg from '../public/assets/projects/blogImg.png';
import futsalImg from '../public/assets/projects/futsalImg.png'
import guitarImg from '../public/assets/projects/guitarImg.png'
import travelImg from '../public/assets/projects/travelImg.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Blog App'
            backgroundImg={blogImg}
            projectUrl='/blog'
            tech='Ruby on Rails'
          />
          
          <ProjectItem
            title='Online Futsal Booking App'
            backgroundImg={futsalImg}
            projectUrl='/futsal'
            tech='Python-DJANGO'

          />
         
          <ProjectItem
            title='Travel App'
            backgroundImg={travelImg}
            projectUrl='/travel'
            tech='ReactJS'

          />
           <ProjectItem
            title='Online Guitar Store'
            backgroundImg={guitarImg}
            projectUrl='/guitar'
            tech='Ruby on Rails'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;