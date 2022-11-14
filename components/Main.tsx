import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail,AiFillInstagram} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'> Lets Build something together</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Prabesh Thapa</span></h1>
                <h1 className='py-2  text-gray-700'>A Full Stack Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a full stack web developer specializing in building (and occasionally designing) exceptional digital experiences.
                    Currently, I'm focused on building a responsive web application while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/prabesh-thapa-b941151a4/' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div></a>        
                    <a href='https://www.github.com/prabesht7' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div></a>
                    <a href='https://www.instagram.com/prabesht7' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiFillInstagram/>
                    </div></a>
                    <a href='/resume' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div></a>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Main;