import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useEffect } from 'react';

function Airsoft() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex flex-col'>
      <div>
        <Navbar />
      </div>
      <h1 className='text-4xl text-white text-center my-8'>L’Airsoft : qu’est-ce que c’est ?</h1>
        <div className='leading-relaxed text-justify px-28'>
          <h1 className='text-white text-2xl mb-8 mt-8'>Comment se déroule une partie d’airsoft ?</h1>
          <p className='text-white'>L’airsoft est une discipline née au Japon dans les années 1970. Une époque durant laquelle la possession d’arme était alors formellement interdite par la loi.</p>
          <p className='text-white'>Le principe de cette activité est on ne peut plus simple : plusieurs joueurs, également appelés « airsofteurs », 
            s’affrontent dans des parties souvent scénarisées qui peuvent s’inspirer ou non de faits réels. 
            Les parties se déroulent en extérieur ou en intérieur, en fonction des possibilités ou tout simplement du contexte défini par le scénario.</p>
          <p className='text-white'>Ainsi, il s’agira parfois de récupérer ou de protéger une position, d‘engranger le plus de points possible en touchant les joueurs adverses, de libérer un otage, de protéger une personnalité, etc. 
            Il peut même arriver que plusieurs objectifs se déroulent de manière simultanée ou s’enchainent afin de rendre les parties encore plus trépidantes.</p>
          <p className='text-white'>Contrairement au paintball, les projectiles utilisés par les joueurs ne laissent pas de marques. C’est donc aux joueurs eux-mêmes de se signaler lorsqu’ils ont été touchés, en criant « out ». 
            En général, ils devront alors quitter la partie pendant quelques secondes avant de pouvoir retourner sur le théâtre des opérations.</p>
            <h1 className='text-white text-2xl mb-8 mt-8'>Le matériel du joueur d’airsoft</h1>
            <p className='text-white '>Durant le déroulement des parties, chaque airsofteur est équipé d’une ou plusieurs répliques, qui pourront lui servir en fonction de la situation. 
              Par exemple, un fusil sniper pour tirer à distance et une réplique de poing, logée dans le holster, pour les combats rapprochés. 
              Le choix des répliques peut également dépendre du rôle tenu par chacun au cours de la partie.</p>
              <p className='text-white '>Un point sur les fameuses répliques : elles utilisent différentes technologies qui possèdent chacune leurs qualités et leurs inconvénients (puissance, vitesse de tir, précision, résistance, etc.). 
                Électriques (AEG), à gaz (NBB ou GBB) ou à ressort (spring), elles tirent toutes des projectiles en plastique à une puissance réglementaire inférieure à 2 joules.</p>
                <p className='text-white '>En plus de leurs indispensables répliques, les joueurs sont équipés de diverses protections et accessoires et toutes sortes. 
                  L’airsoft n’est certes pas un sport extrême, mais il nécessite néanmoins de prendre quelques mesures de sécurité, car les joueurs sont amenés à s’affronter sur des terrains parfois très accidentés où il n’est pas rare de trébucher. 
                  Sans compter les projectiles qui peuvent quant à eux constituer un authentique danger pour les yeux.</p>
                  <p className='text-white '>On recense ainsi quelques éléments obligatoires, comme les protections oculaires (casque intégral ou lunettes de protection) ou les chaussures hautes. 
                    Néanmoins, la plupart des équipements que l’on trouve en boutique ont un rôle soit principalement pratique, soit purement cosmétique.</p>
                    <h1 className='text-white text-2xl mb-8 mt-8'>Une activité sportive bien encadrée</h1>
                    <p className='text-white '>Comme toutes les activités sportives qui se respectent, l’airsoft est encadré par une réglementation assez stricte, qui dépend de chaque pays. 
                      On s’assure ainsi que les consignes de sécurité sont bien respectées par les participants. 
                      Que cela concerne la puissance maximale des répliques ou le port des équipements de sécurité obligatoires.</p>
                      <p className='text-white '>Dernier point, si vous avez envie de vous lancer, mais que vous vous sentez déjà perdu face au jargon utilisé dans le milieu de l’airsoft, n’ayez crainte : il y aura toujours un passionné disposé à vous offrir des explications détaillées sur le vocabulaire utilisé et les règles de base de ce loisir. 
                        Par ailleurs, il existe de nombreux sites d’information pour répondre à vos interrogations !</p>
                        <p className='text-white '>L’airsoft, ce n’est donc pas seulement une discipline qui permet de développer ses compétences physiques et son sens tactique, c’est aussi une grande famille où règnent la camaraderie, la fraternité et le respect de l’autre !</p>
        </div>
        <div className='flex'>
        <button className='bg-blue-700 hover:bg-blue-500 text-white p-2 rounded-lg justify-center align-middle m-auto my-8'><Link to="/">Retour</Link></button>
        </div>
      </div>
  )
}

export default Airsoft