import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white mt{-1}'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>À propos</p>
            </div>
            <p className='text-xl mt-20'>
            Bonjour !<br/> <br/>
            Je m'appelle Romain, j'ai 22 ans et je suis passionné d'informatique depuis toujours. Mon intérêt pour la programmation m'a amené à poursuivre des études dans ce domaine. <br/>Je suis actuellement en BTS SIO options SLAM à l'école IPSSI à Marne-la-Vallée, où j'ai acquis des compétences solides en développement web et en programmation orientée objet. <br/> <br/>Avant cela, j'ai effectué deux ans de licence en Informatique générale à l'université de Paris où j'ai pu découvrir le monde de la programmation.<br/>Ensuite je compte effectuer par la suite un Bachelor Développement fullstack & DevOps au sein de cette école.<br/><br/>

            Mes centres d'intérêt, en dehors de l'informatique, sont la course à pied et le cinéma. La course m'aide à me ressourcer et à me concentrer, tandis que le cinéma m'inspire et me divertit.
            </p>
            <br />
            <p className='text-xl'>
              <br/>
            Mon objectif professionnel est de devenir développeur FullStack. J'apprécie particulièrement le défi de travailler sur des projets de grande envergure et de résoudre des problèmes complexes. <br/><br/>Ainsi ce portfolio est une vitrine de mes compétences en programmation et en développement web. J'y présente mes projets et mes réalisations académiques, dans l'espoir de trouver de nouvelles opportunités professionnelles.<br/>
            </p>

        </div>
    </div>
  )
}

export default About