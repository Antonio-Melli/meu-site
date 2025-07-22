// CSS do componente Projetos
import './conhecimento.css'; // CSS específico para o componente de conhecimento profissional

// Imagem pessoal
import antonio from './img/antoniomelli.png'

// Bibliotecas e hooks necessários
import { motion, useInView } from 'framer-motion'; // Framer-motion para animações
import { useRef } from 'react'; // useRef do React para referência de elementos



// Componente para conhecimento profissional
function Conhecimento() {
 const ref = useRef(null); // Referência para o elemento de conhecimento profissional
 const isInView = useInView(ref, { once: true, margin: '-100px' }); // Verifica se o elemento está visível na viewport



  // Conhecimento profissional com animação de fade-in
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

      <p>Olá! Meu nome é Antonio e eu adoro criar soluções que vivem na internet. 
         Sou estudante de Análise e Desenvolvimento de Sistemas e comecei a desenvolver web ainda bem jovem,
         descobri que criar sites personalizados é uma forma incrível de aprender lógica e criatividade.</p>

      <p>Hoje, tenho me dedicado ao desenvolvimento de sites especializados e extensos com foco em acessibilidade, 
         usabilidade e performance. Meu stack atual inclui HTML, CSS, JavaScript e PHP.</p>

      <p>Estas são algumas das tecnologias com que venho trabalhando recentemente:</p>

      <ul className="tech-list">
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>TypeScript</li>
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

// Exporta o componente de conhecimento profissional para utiliza-lo em app
export default Conhecimento;