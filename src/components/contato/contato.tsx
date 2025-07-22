// CSS do componente de contato
import './contato.css'; // CSS específico para o componente de contato

// Bibliotecas e hooks necessários
import { motion, useInView } from 'framer-motion'; // Framer-motion para animações
import { useRef } from 'react'; // useRef do React para referência de elementos



// Componente de contato
function Contato() {
  const ref = useRef(null); // Referência para o elemento de projetos
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Verifica se o elemento está visível na viewport



  // Contato com animação de fade-in
  return (
    <div className="Contato">
      
      <motion.section
        className="contato"
        id="contato"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >

<section className="contato" id="contato">
  <div className="container-contato">
    <p className="project-overline">04. O que vem a seguir?</p>
   
      <div className="contato-texto">
        <h2>Entre em contato</h2>
          <p>Estou em busca de novas oportunidades, mas minha caixa de entrada continua aberta. 
            Se tiver dúvidas ou quiser apenas dizer oi, será um prazer responder.</p>
            <a href="mailto:antoniomelli79@gmail.com">Diga olá</a>
      </div>
  </div>
</section>

</motion.section>
    </div>
    
  );
}

// Exporta o componente contato para utiliza-lo em app
export default Contato;