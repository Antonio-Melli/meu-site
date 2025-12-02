// CSS do componente Projetos
import './projetos.css'; // CSS específico para o componente Projetos

// Imagens dos projetos
import lightbuss from './img/imagem.png'; // Imagem do projeto LightBuss Games
import tbh from './img/imagem3.png'; // Imagem do projeto The Big Heist
import antmelliweb from './img/imagem4.png'; // Imagem do projeto The Big Heist

// Bibliotecas e hooks necessários
import { motion, useInView } from 'framer-motion'; // Framer-motion para animações
import { useRef } from 'react'; // useRef do React para referência de elementos



// Componente para projetos
function Projetos() {
  const ref = useRef(null);   // Referência para o elemento de projetos
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Verifica se o elemento está visível na viewport



  // Projetos com animação de fade-in
  return (
    <div className="Projetos">

      <motion.section
        className="projetos"
        id="projetos"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >

  <section className="projects-section" id="projeto">
    <h2 className="section-title"><span className="numero">03.</span> Alguns de meus projetos</h2>

       <div className="project-container1">
        <div className="project-image">
         <img src={antmelliweb} alt="Site oficial" />
        </div>

       <div className="project-content">
        <p className="project-overline">Projeto em destaque</p>
        <h3 className="project-title">Antonio Melli Website</h3>

       <div className="project-description">
        <p>
          Website criado para fins de portfólio e representação profissional.
        </p>
      </div>

       <ul className="project-tech-list">
       <li>Visual Studio</li>
        <li>React e TypeScript</li>
       </ul>

       <div className="project-links">
        <a href="https://github.com/Antonio-Melli/meu-site" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
        <a href="http://www.antoniomelli.kesug.com" aria-label="GitHub"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
       </div>
     </div>
  </div>

       <div className="project-container2">
        <div className="project-image">
         <img src={lightbuss} alt="Lightbuss Games" />
        </div>

       <div className="project-content">
        <p className="project-overline">Projeto em desenvolvimento</p>
        <h3 className="project-title">LightBuss Games Website</h3>

       <div className="project-description">
        <p>
          Um site criado com os mínimos detalhes, pensado na interatividade e simplicidade para o usuário.
        </p>
      </div>

       <ul className="project-tech-list">
        <li>Visual Studio</li>
        <li>React e TypeScript</li>
       </ul>

       <div className="project-links">
        <a href="https://www.google.com/" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
       </div>
     </div>
  </div>

        <div className="project-container3">
        <div className="project-image">
          <img src={tbh} alt="The Big Heist" />
        </div>

        <div className="project-content">
          <p className="project-overline">Projeto em desenvolvimento</p>
          <h3 className="project-title">The Big Heist</h3>

        <div className="project-description">
          <p>
         Jogo de mundo aberto 2D, desenvolvido em JavaScript e inspirado na era clássica de GTA. 
          </p>
      </div>

        <ul className="project-tech-list">
          <li>JavaScript</li>
          <li>GameMaker Language</li>
        </ul>

        <div className="project-links">
          <a href="https://www.google.com/" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
  </div>
</section>

  </motion.section>
</div>
  );
}

// Exporta o componente projetos para utiliza-lo em app
export default Projetos;