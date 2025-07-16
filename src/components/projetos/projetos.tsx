import './projetos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import lightbuss from './img/imagem.png';
import tbh from './img/imagem3.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Projetos() {
    const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });

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
      <img src={tbh} alt="The Big Heist" />
    </div>
    <div className="project-content">
      <p className="project-overline">Projeto em destaque</p>
      <h3 className="project-title">The Big Heist</h3>
      <div className="project-description">
        <p>
         Jogo de mundo aberto 2D, desenvolvido em JavaScript e inspirado na era clássica de GTA. Disponível em: <a href="Em breve">Google Play Store</a> e <a href="Em breve">Steam</a>
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
  <div className="project-container2">
    <div className="project-image">
      <img src={lightbuss} alt="Lightbuss Games" />
    </div>
    <div className="project-content">
      <p className="project-overline">Projeto em destaque</p>
      <h3 className="project-title">LightBuss Games Website</h3>
      <div className="project-description">
        <p>
          Um site criado com os mínimos detalhes, pensado na interatividade e simplicidade para o usuário. Disponível em:
          <a href="lightbussgames.kesug.com">lightbussgames.kesug.com</a>
          </p>
      </div>
      <ul className="project-tech-list">
        <li>VS Code</li>
        <li>Sublime Text</li>
      </ul>
      <div className="project-links">
        <a href="https://www.google.com/" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
        <a href="lightbussgames.kesug.com" aria-label="External Link"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
    </div>
  </div>
      </section>
      </motion.section>
      </div>
  );
}

export default Projetos;