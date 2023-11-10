import React, { useState } from 'react';
import ap1 from '../assets/portfolio/ap1.png';
import Freelance from '../assets/portfolio/freelance_js.png';
import Harmony from '../assets/portfolio/harmony.png';
import respireStat from '../assets/portfolio/respire-stat.png';
import Modal from './Modal/Modal'; // Assurez-vous d'importer correctement le composant Modal

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPdfLinks, setCurrentPdfLinks] = useState([]);
  const [currentProjectTitle, setCurrentProjectTitle] = useState('');

  const openModal = (projectPdfLinks, projectTitle) => {
    setCurrentPdfLinks(projectPdfLinks);
    setCurrentProjectTitle(projectTitle);
    setIsModalOpen(true);
  };

   const portfolio_ecole = [
        {
            id:1,
            titre: "Shop_def", 
            src:ap1,
            site:"https://ap1-shop-def.netlify.app/",
            gitlab:"https://gitlab.com/rb2720812/projetfacturebr",
            pdfLinks: [
                { name: 'Document 1', url: 'lien_vers_document_1.pdf' },
                { name: 'Document 2', url: 'lien_vers_document_2.pdf' }
            ]
        },
        {
            id:2,
            titre: "", 
            src:Freelance,
            site: "https://ma-facturation-freelance.netlify.app/",
            gitlab:"https://gitlab.com/rb2720812/projetfacturebr",
            pdfLinks: [
                { name: 'Document 3', url: 'lien_vers_document_1.pdf' },
                { name: 'Document 4', url: 'lien_vers_document_2.pdf' }
            ]
        },
        {
            id:3,
            titre: "", 
            src:Harmony,
            site: "https://harmony.ipssi-sio.fr",
            gitlab: "https://gitlab.com/la-biblioth-que-qui-lit/la-bibliotheque-qui-lit",
            pdfLinks: [
                { name: 'Document 5', url: 'lien_vers_document_1.pdf' },
                { name: 'Document 6', url: 'lien_vers_document_2.pdf' }
            ]

        },
        {
            id:4,
            titre: "", 
            src:respireStat,
            style: "hidden",
            gitlab: "https://gitlab.com/Romain-Pailler/respirestatg7",
            pdfLinks: [
                { name: 'Document 7', url: 'lien_vers_document_1.pdf' },
                { name: 'Document 8', url: 'lien_vers_document_2.pdf' }
            ]

        },
    ];
    const portfolio_entreprise = [
        {
            id:1,
            titre: "", 
            src:ap1,
            site:"https://ap1-shop-def.netlify.app/",
            gitlab:"https://gitlab.com/rb2720812/projetfacturebr",
            pdfLinks: [
                { name: 'Document 9', url: 'lien_vers_document_1.pdf' },
                { name: 'Document 10', url: 'lien_vers_document_2.pdf' }
            ]
        },
        {
            id:2,
            titre: "", 
            src:Freelance,
            site: "https://ma-facturation-freelance.netlify.app/",
            gitlab:"https://gitlab.com/rb2720812/projetfacturebr",
            pdfLinks: [
                { name: 'Document 11', url: 'lien_vers_document_1.pdf' },
                { name: 'Document 12', url: 'lien_vers_document_2.pdf' }
            ]
        },
        {
            id:3,
            titre: "", 
            src:Harmony,
            site: "https://harmony.ipssi-sio.fr",
            gitlab: "https://gitlab.com/la-biblioth-que-qui-lit/la-bibliotheque-qui-lit",
            pdfLinks: [
                { name: 'Document 13', url: 'lien_vers_document_1.pdf' },
                { name: 'Document 14', url: 'lien_vers_document_2.pdf' }
            ]
        },
        {
            id:4,
            titre: "", 
            src:respireStat,
            style: "hidden",
            gitlab: "https://gitlab.com/Romain-Pailler/respirestatg7",
            pdfLinks: [
                { name: 'Document 15', url: 'lien_vers_document_1.pdf' },
                { name: 'Document 16', url: 'lien_vers_document_2.pdf' }
            ]
        },
    ];

  return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Mes projets en école :</p>
                </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolio_ecole.map(({ id,titre, src, site, style, pdfLinks }) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <a href={site} target="_blank" rel="noreferrer">
                                <button className={`w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105 ${style}`}>
                                    Voir le site
                                </button>
                            </a>
                            <button
                            onClick={() => openModal(pdfLinks, titre)}
                            className={`w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105`}
                            >
                                Voir la documentation
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='py-6'>Mes projets en entreprise :</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolio_entreprise.map(({id,titre, src, site,style,pdfLinks}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <a href={site} target="_blank" rel="noreferrer">
                                    <button className={`w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105 ${style}`}>Voir le site</button>
                                </a>
                                <button
                            onClick={() => openModal(pdfLinks, titre)}
                            className={`w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105`}
                            >
                                Voir la documentation
                            </button>
                            </div>
                        </div>
                ))}
                </div>
            </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={currentProjectTitle} pdfLinks={currentPdfLinks} />

        </div>
    );
};

export default Portfolio;
