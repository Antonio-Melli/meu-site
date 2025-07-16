import './conhecimento.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import antonio from './img/antoniomelli.png'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Conhecimento() {
 const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="Conhecimento">
      
       <motion.section
        className="conhecimento"
        id="conhecimento"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >

  <section id="sobre" className="sobre-section">
       <div className="container-sobre">
            <div className="texto-sobre">
              <h2><span className="numero">01.</span> Sobre Mim</h2>
      
      <p>Olá! Meu nome é Antonio e eu adoro criar soluções que vivem na internet. Sou estudante de Análise e Desenvolvimento de Sistemas e comecei a desenvolver web ainda bem jovem — descobri que criar sites personalizados é uma forma incrível de aprender lógica e criatividade.</p>

      <p>Hoje, tenho me dedicado ao desenvolvimento de sites especializados e extensos com foco em acessibilidade, usabilidade e performance. Meu stack atual inclui HTML, CSS, JavaScript e PHP.</p>

      <p>Estas são algumas das tecnologias com que venho trabalhando recentemente:</p>

      <ul className="tech-list">
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Bootstrap</li>
        <li>WordPress</li>
        <li>WooCommerce</li>
      </ul>
    </div>

    <div className="foto-sobre">
      <div className="img-wrapper">
        <img src={antonio} alt="Antonio Melli" />
      </div>
    </div>
</div>
    </section>
    </motion.section>
</div>
  );
}

export default Conhecimento;