import React, { useState } from 'react';
import glpi from '../assets/glpi.png';
import alpizen from '../assets/portfolio/alpizen.png';
import ap1 from '../assets/portfolio/ap1.png';
import atmosphere from '../assets/portfolio/atmosphere.png';
import circulations from '../assets/portfolio/circulations.png';
import Freelance from '../assets/portfolio/freelance_js.png';
import pwopp from '../assets/portfolio/pwopp.png';
// import respireStat from '../assets/portfolio/respire-stat.png';
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
            style_doc: "", 
            pdfLinks: [
                { name: 'Présentation', url: '/documentation/ap1/Diapo_Shop_def.pdf' },
                { name: 'Devis', url: '/documentation/ap1/Devis DivinByDivin - DivinByDivin.pdf' },
                { name: 'Facture', url: '/documentation/ap1/Facture N°1 - DivinByDivin.pdf' },
                { name: 'Fiche de poste', url: 'documentation/ap1/Fiche_de_poste.pdf' },
                { name: 'Kbis', url: '/documentation/ap1/KBIS.pdf' },
            ]
        },
        {
            id:2,
            titre: "Atelier Professionnel 2", 
            src:'/documentation/ap2/ap2.png',
            style_doc: "", 
            style: "hidden",
            pdfLinks: [
                { name: 'Présentation', url: '/documentation/Shop_M2L.pdf' }
            ]
        },
        {
            id:3,
            titre: "Atelier Professionnel 3", 
            src:'/documentation/ap3/ap3.png',
            style_doc: "", 
            style: "hidden",
            pdfLinks: [
                { name: 'Documentation Technique ', url: '/documentation/ap3/Docu_Technique_M2L.pdf' },
                { name: 'Documentation Utilisateur ', url: '/documentation/ap3/M2L_Doc_Utilisateur.pdf' }
            ]

        },
        {
            id:4,
            titre: "Atelier Professionnel 4", 
            src:'/documentation/ap4/ap4.png',
            style_doc: "", 
            style: "hidden",
            pdfLinks: [
                { name: 'Documentation Technique ', url: '/documentation/ap4/Docu_Technique_M2L.pdf' },
                { name: 'Documentation Utilisateur ', url: '/documentation/ap4/M2L_Doc_Utilisateur.pdf' }
            ]

        },
        {
            id:5,
            titre: "Ma facture Freelance", 
            src:Freelance,
            style_doc: "", 
            site: "https://ma-facturation-freelance.netlify.app/",
            pdfLinks: [
                { name: 'Documentation', url: '/documentation/factureFreelance/factureFreelance.pdf' }
            ]

        },
        // {
        //     id:5,
        //     titre: "Respire Stat", 
        //     src:respireStat,
        //     style: "hidden",
        //     pdfLinks: [
        //         { name: 'Documentation en Français', url: '/documentation/respireStat/Manuel_utilisation_RespireStat.pdf' },
        //         { name: 'Documentation en Anglais', url: '/documentation/respireStat/User_manual_RespireStat.pdf' }
        //     ]

        // },
        {
            id:6,
            titre: "Autres",
            src: glpi,
            style: "hidden",
            style_doc: "", 
            pdfLinks:[
                { name: 'GLPI', url: '/documentation/glpi.pdf'},
                { name: 'Baie Informatique', url: '/documentation/baie.pdf'},
                { name: 'Créer un compte LinkedIn', url: 'alternance/linkedin.pdf' },
                { name: 'Comment mettre en place une veille technologique', url: 'alternance/veille_techno_doc.pdf'},
                { name: 'Comment déployer son Front-End sur le Serveur', url: 'documentation/Deploiement_front .pdf'},
                { name: 'Comment déployer son Back-End sur le Serveur', url: 'documentation/Deploiement_back.pdf'},
            ]
        },
        {
            id:7,
            titre: "Shop_def",
            style_doc: "hidden", 
            src:atmosphere,
            site:"https://webetu.iutnc.univ-lorraine.fr/www/e56682u/Interop/Atmosphere/atmosphere.php"
        },{
            id:8,
            titre: "Shop_def",
            style_doc: "hidden", 
            src:circulations,
            site:"https://webetu.iutnc.univ-lorraine.fr/www/e56682u/Interop/Circulations/circulations.html"
        },
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
        {
            id:4,
            titre: "Leasa", 
            src:'/alternance/Leasa_Equasens.png',
            style: "hidden",
            pdfLinks: [
                { name: 'Page de Recherche', url: 'alternance/Page-de-recherche.pdf' },
                { name: 'Rest API', url: 'alternance/Documentation_API.pdf' },
                { name: 'Diagramme de Gantt', url: 'alternance/diagramme_gantt_projet_metabase.pdf' },
                { name: 'Docker-Compose', url: 'alternance/docker.pdf' },
                { name: 'Installation de MongoDB', url: 'alternance/installer_MongoDB.pdf' },
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
                {portfolio_ecole.map(({ id,titre, src, site, style, pdfLinks,style_doc }) => (
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
                            className={`w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105 ${style_doc}`}
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
