import React, { useState } from 'react';
import glpi from '../assets/glpi.png';
import alpizen from '../assets/portfolio/alpizen.png';
import ap1 from '../assets/portfolio/ap1.png';
import Freelance from '../assets/portfolio/freelance_js.png';
import pwopp from '../assets/portfolio/pwopp.png';
import respireStat from '../assets/portfolio/respire-stat.png';
import Modal from './Modal/Modal';

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
            pdfLinks: [
                { name: 'Présentation', url: '/documentation/ap1/Diapo_Shop_def.pdf' },
                { name: 'Devis', url: '/documentation/ap1/Devis DivinByDivin - DivinByDivin.pdf' },
                { name: 'Facture', url: '/documentation/ap1/Facture N°1 - DivinByDivin.pdf' },
                { name: 'Fiche de poste', url: 'documentation/ap1/Fiche_de_poste.pdf' },
                { name: 'Kbis', url: '/documentation/ap1/KBIS.pdf' },
                { name: 'Business Plan', url: 'lien_vers_document_2.pdf' },
            ]
        },
        {
            id:2,
            titre: "Atelier Professionnel 2", 
            src:'/documentation/ap2/ap2.png',
            style: "hidden",
            pdfLinks: [
                { name: 'Présentation', url: '/documentation/Shop_M2L.pdf' }
            ]
        },
        {
            id:3,
            titre: "Ma facture Freelance", 
            src:Freelance,
            site: "https://ma-facturation-freelance.netlify.app/",
            pdfLinks: [
                { name: 'Documentation', url: '/documentation/factureFreelance/factureFreelance.pdf' }
            ]

        },
        {
            id:4,
            titre: "Respire Stat", 
            src:respireStat,
            style: "hidden",
            pdfLinks: [
                { name: 'Documentation en Français', url: '/documentation/respireStat/Manuel_utilisation_RespireStat.pdf' },
                { name: 'Documentation en Anglais', url: '/documentation/respireStat/User_manual_RespireStat.pdf' }
            ]

        },
        {
            id:5,
            titre: "Autres",
            src: glpi,
            style: "hidden",
            pdfLinks:[
                { name: 'GLPI', url: '/documentation/glpi.pdf'},
                { name: 'Baie Informatique', url: '/documentation/baie.pdf'}
                // { name: 'Inventaire de la baie informatique', url: 'lien_vers_document_1.pdf'},
                // { name: 'Comment mettre en place une veille technologique', url: 'lien_vers_document_1.pdf'},
            ]
        }
    ];
    const portfolio_entreprise = [
        {
            id:1,
            titre: "TimeHebdo", 
            src:'/Documentation/timehebdo/timehebdo.png',
            style: "hidden",
            pdfLinks: [
                { name: 'Documentation', url: '/documentation/timeHebdo/timeHebdo.pdf' }
            ]
        },
        {
            id:2,
            titre: "Pwopp", 
            src:pwopp,
            style: "hidden",
            pdfLinks: [
                { name: 'Documentation', url: 'documentation/pwopp/pwopp.pdf' }
            ]
        },
        {
            id:3,
            titre: "Alpizen", 
            src:alpizen,
            site: "https://alpizen.fr/",
            pdfLinks: [
                { name: 'Documentation', url: 'documentation/Alpizen/alpizen.pdf' }
            ]
        },
    ];

  return (
        <div name="portfolio" className="bg-gradient-to-b from-gray-800 to-black w-full text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projets</p>
                    <p className="py-6">Mes projets en école :</p>
                </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolio_ecole.map(({ id,titre, src, site, style, pdfLinks }) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <a href={site} target="_blank" rel="noreferrer">
                                <button className={`w-3/4 px-4 py-3 m-4 duration-200 hover:scale-105 ${style}`}>
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
                                    <button className={`w-2/3 px-3 py-3 m-4 duration-200 hover:scale-105 ${style}`}>Voir le site</button>
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
