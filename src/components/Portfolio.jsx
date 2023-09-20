import React from 'react';
import ap1 from '../assets/portfolio/ap1.png';
import Freelance from '../assets/portfolio/freelance_js.png';
import Harmony from '../assets/portfolio/harmony.png';
import respireStat from '../assets/portfolio/respire-stat.png';
const Portfolio = () => {
    const portfolio_ecole = [
        {
            id:1,
            src:ap1,
            site:"https://ap1-shop-def.netlify.app/",
            gitlab:"https://gitlab.com/rb2720812/projetfacturebr"
        },
        {
            id:2,
            src:Freelance,
            site: "https://ma-facturation-freelance.netlify.app/",
            gitlab:"https://gitlab.com/rb2720812/projetfacturebr"
        },
        {
            id:3,
            src:Harmony,
            site: "https://harmony.ipssi-sio.fr",
            gitlab: "https://gitlab.com/la-biblioth-que-qui-lit/la-bibliotheque-qui-lit"

        },
        {
            id:4,
            src:respireStat,
            style: "hidden",
            gitlab: "https://gitlab.com/Romain-Pailler/respirestatg7"

        },
    ];
    const portfolio_entreprise = [
        {
            id:1,
            src:ap1,
            site:"https://ap1-shop-def.netlify.app/",
            gitlab:"https://gitlab.com/rb2720812/projetfacturebr"
        },
        {
            id:2,
            src:Freelance,
            site: "https://ma-facturation-freelance.netlify.app/",
            gitlab:"https://gitlab.com/rb2720812/projetfacturebr"
        },
        {
            id:3,
            src:Harmony,
            site: "https://harmony.ipssi-sio.fr",
            gitlab: "https://gitlab.com/la-biblioth-que-qui-lit/la-bibliotheque-qui-lit"

        },
        {
            id:4,
            src:respireStat,
            style: "hidden",
            gitlab: "https://gitlab.com/Romain-Pailler/respirestatg7"

        },
    ]



  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Mes projets en école :</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolio_ecole.map(({id, src, site,style,gitlab}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                    <a href={site} target="_blank" rel="noreferrer">
                        <button className={`w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105 ${style}`}>Voir le site</button>
                    </a>
                    <a href={gitlab} target="_blank" rel="noreferrer">
                        <button className='w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105'>Voir la documentation</button>
                    </a>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='py-6'>Mes projets en entreprise :</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolio_entreprise.map(({id, src, site,style,gitlab}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                    <a href={site} target="_blank" rel="noreferrer">
                        <button className={`w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105 ${style}`}>Voir le site</button>
                    </a>
                    <a href={gitlab} target="_blank" rel="noreferrer">
                        <button className='w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105'>Voir la documentation</button>
                    </a>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio