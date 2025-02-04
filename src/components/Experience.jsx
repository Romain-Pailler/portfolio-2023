import React from 'react';
import Angular from '../assets/angular.png';
import C from '../assets/c.png';
import CSS from '../assets/css.png';
import Git from '../assets/git.png';
import HTML from '../assets/html.png';
import Java from '../assets/java.png';
import JS from '../assets/javascript.png';
import MySql from '../assets/mysql.png';
import PHP from '../assets/php.png';
import Python from '../assets/python.png';
import react from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
const Experience = () => {
    const techs = [
        {
            id: 1,
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: JS,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 5,
            src: PHP,
            title: 'Php',
            style: 'shadow-blue-700'
        },
        {
            id: 6,
            src: Java,
            title: 'Java',
            style: 'shadow-red-500'
        },
        {
            id: 7,
            src: C,
            title: 'C',
            style: 'shadow-blue-500'
        },
        {
            id: 8,
            src: MySql,
            title: 'MySql',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: Git,
            title: 'Git',
            style: 'shadow-orange-500'
        },
        {
            id: 10,
            src: react,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 11,
            src: Angular,
            title: 'Angular',
            style: 'shadow-red-600'
        },
        {
            id: 12,
            src: Python,
            title: 'Python',
            style: 'shadow-yellow-600'
        }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-black to-gray-800 w-full h-full mt-0'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Expériences</p>
                <p className='py-6'>Les languages que j'ai déjà utilisé :</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id, src, title, style})=> (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience