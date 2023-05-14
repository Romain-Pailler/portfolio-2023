import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import CvImage from '../assets/img_cv_1.png';
const Home = () => {
    return (
        
        <div 
            name="home" 
            className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
        >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row mt-11 md:mt-0'>
                <div className='flex flex-col justify-center h-full mr-4'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white ml-1'>
                        Je suis un étudiant en développement Web
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Actuellement étudiant en BTS SIO, je réalise des projets orientés web mais pas que ! J'adore le Java, le PHP ainsi que le JavaScript !!!
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={CvImage} alt="Romain" className='rounded-2xl mx-auto w-2/3 md:w-full mt-0' />
                </div>
            </div>
        </div>
    );
};

export default Home