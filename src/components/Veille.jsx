import React from 'react';
import veilleTechno1 from '../assets/veille_techno_1_image.png';
const Veille = () => {
    const veilles = [
        {
            id:1,
            src:veilleTechno1,
            powerpoint:"/Documentation/veille_techo_1.pdf",
        }
    ];
return(
    <div name="veille" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Mes Veilles technologiques</p>
            <p className='py-6'>Voici ma veille :</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
            {
                veilles.map(({id, src,powerpoint}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                    <a href={powerpoint} target="_blank" rel="noreferrer">
                        <button className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105`}>Voir la présentation</button>
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
export default Veille;