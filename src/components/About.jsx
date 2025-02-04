import React from 'react';


const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>À propos</p>
            </div>
            <p className='text-xl mt-20'>
            Bonjour !<br/><br/>
            Je m'appelle Romain, j'ai 23 ans et je suis passionné d'informatique depuis le lycée. Mon intérêt pour la programmation m'a amené à poursuivre des études dans ce domaine. <br/>Fraichement diplômé d'un BTS SIO options SLAM à l'école IPSSI à Marne-la-Vallée et souhaitant approfondir mes compétences et élargir mes perspectives, j’ai poursuivi mes études en B.U.T. Informatique en troisième année, avec un parcours axé sur la réalisation d’applications. La formation, mêlant théorie et pratique à travers des Situations d’Apprentissage et d’Évaluation (SAÉ) et des projets tutorés, m'offre une approche complète du métier de développeur.
            </p>
            <p className='text-xl pb-12'>
              <br/>
            Mon objectif professionnel est de devenir développeur FullStack. J'apprécie particulièrement le défi de travailler sur des projets de grande envergure et de résoudre des problèmes complexes.
            </p>
            <p className='text-xl pb-12'>
              Etant actuellement en alternance au sein de Equasens, j’ai l’opportunité de me confronter à un réel environnement professionnel avec ses problématiques, ses besoins et de comprendre comment amener les solutions. Je me réjouis également d’observer l’amélioration de mes compétences en développement. C’est en toute logique que je souhaite poursuivre mes études en apprentissage afin d’avoir un socle solide en sortie de parcours.
            </p>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Présentation du BUT</p>
                <p className='text-xl mt-20'>
            Ce parcours correspondait bien à mes attentes, car il m’a permis de développer à la fois des compétences techniques et méthodologiques tout en me confrontant aux réalités du monde professionnel grâce à l’alternance. Le BTS m’a donné des bases solides en développement, tandis que le BUT a approfondi mes connaissances et ma capacité à travailler sur des projets d’envergure, notamment en équipe.
            L’accent mis sur la gestion de projet, la collaboration et la communication a également été un atout, en complément des aspects purement techniques. Ce parcours a conforté mon projet professionnel de devenir développeur full-stack, avec une approche polyvalente et une maîtrise des différentes étapes du cycle de vie d’une application.<br/>
            En résumé, l’enchaînement BTS → BUT a été un choix pertinent qui m’a permis de monter progressivement en compétences et de me préparer efficacement à mon futur métier.
            </p>
            </div>
            <br/>
            <div className="pb-8">
  <p className="text-4xl font-bold inline border-b-4 border-gray-500">Auto évaluation</p>
  <div className="overflow-x-auto">
    <br/>
    <table className="w-full border border-gray-700 text-white">
      <thead className="bg-gray-900 text-gray-300">
        <tr>
          <th className="p-4 text-left border border-gray-700">Nom Compétence</th>
          <th className="p-4 text-left border border-gray-700">Auto-Evaluation</th>
          <th className="p-4 text-left border border-gray-700">Justification</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-700 bg-gray-800 hover:bg-gray-700">
          <td className="p-4">Réaliser des applications</td>
          <td className="p-4">Intermédiaire</td>
          <td className="p-4">Bonne maîtrise de la POO et des design patterns, encore à perfectionner en tests unitaires.</td>
        </tr>
        <tr className="border-b border-gray-700 bg-gray-900 hover:bg-gray-800">
          <td className="p-4">Optimiser des applications</td>
          <td className="p-4">Débutant</td>
          <td className="p-4">Bases solides en algorithmes, mais besoin d'approfondir l'optimisation et l'analyse de complexité.</td>
        </tr>
        <tr className="border-b border-gray-700 bg-gray-800 hover:bg-gray-700">
          <td className="p-4">Administrer les applications</td>
          <td className="p-4">Intermédiaire</td>
          <td className="p-4">Capacité à configurer des services et protocoles, encore des progrès à faire en administration avancée.</td>
        </tr>
        <tr className="border-b border-gray-700 bg-gray-900 hover:bg-gray-800">
          <td className="p-4">Gérer des données</td>
          <td className="p-4">Avancé</td>
          <td className="p-4">Maîtrise de la modélisation et de SQL, expérience sur des bases relationnelles complexes.</td>
        </tr>
        <tr className="border-b border-gray-700 bg-gray-800 hover:bg-gray-700">
          <td className="p-4">Conduire un développement</td>
          <td className="p-4">Intermédiaire</td>
          <td className="p-4">Bonne gestion des besoins et travail en projet, encore à améliorer en gestion agile.</td>
        </tr>
        <tr className="border-b border-gray-700 bg-gray-900 hover:bg-gray-800">
          <td className="p-4">Collaborer</td>
          <td className="p-4">Avancé</td>
          <td className="p-4">Très à l'aise en communication et travail d'équipe, utilisation fluide des outils collaboratifs.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        </div>
        
    </div>
  )
}

export default About