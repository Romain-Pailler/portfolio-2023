import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>À propos</p>
            </div>
            <p className='text-xl mt-20'>
            Bonjour !<br/> <br/>
            Je m'appelle Romain, j'ai 22 ans et je suis passionné d'informatique depuis le lycée. Mon intérêt pour la programmation m'a amené à poursuivre des études dans ce domaine. <br/>Je suis actuellement en BTS SIO options SLAM à l'école IPSSI à Marne-la-Vallée. <br/> <br/>Ensuite je compte effectuer par la suite un Bachelor Développement fullstack & DevOps au sein de cette école.
            </p>
            <p className='text-xl pb-12'>
              <br/>
            Mon objectif professionnel est de devenir développeur FullStack. J'apprécie particulièrement le défi de travailler sur des projets de grande envergure et de résoudre des problèmes complexes.
            </p>
            <p className='text-xl pb-12'>
              Etant actuellement en alternance au sein de Equasens, j’ai l’opportunité de me confronter à une réel environnement professionnel avec ses problématiques, ses besoins et de comprendre comment amener les solutions. Je me réjouis également d’observer l’amélioration de mes compétences en développement. C’est en toute logique que je souhaite poursuivre mes études en apprentissage afin d’avoir un socle solide en sortie de parcours.
            </p>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Présentation du BTS</p>
            </div>
            <p className='text-xl mt-20'>
            Le Brevet de Technicien Superieur Services informatiques aux Organisations (BTS SIO) s’adresse a ceux qui souhaitent se former
            en deux ans aux metiers d’administrateur reseau ou de developpeur pour integrer directement le marche du travail ou continuer des etudes dans le domaine de l’informatique.<br/><br />
            Les débouchés Option SLAM :
            <li>Developpeur d'applications informatiques</li>
            <li>Developpeur informatique</li>
            <li>Analyste d'applications ou d'etudes</li>
            <li>Analyste programmeur</li>
            <li>Charge d'etudes informatiques</li>
            <br />
            <br />
            Option SISR :
            <li>Technicien de production</li>
            <li>Technicien d’infrastructure</li>
            <li>Technicien reseau et telecoms</li>
            <li>Technicien systemes et reseaux</li>
            <br />
            <br />
            La cybersécurité :
            <br />
            <br />
            Pour répondre au besoin actuel du domaine informatique, la sécurité des données professionnelles et personnelles sont devenu l'un des points primordiaux de cette formation. Au vu de l'augmentation des vols de données et de l'évolution des techniques d'arnaques, les entreprises souhaitent developper la cybersecurité. <br /> C'est a cet effet, que le BTS SIO s'est reformé et est maintenant plus axé sur la securité. Les deux sections apprennent donc à sécuriser leurs codes pour les SLAM et l'Infrastructure reseau pour les SISR.
            </p>
            <br/>
        </div>
    </div>
  )
}

export default About