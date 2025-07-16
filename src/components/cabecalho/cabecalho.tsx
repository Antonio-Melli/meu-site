import './cabecalho.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { toggleMobileMenu } from '../animacoes/animacoes.tsx';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

function Cabecalho() {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Rolando pra baixo, esconde
      controls.start({ y: '-100%' });
    } else {
      // Rolando pra cima, mostra
      controls.start({ y: 0 });
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="cabecalho"
      initial={{ y: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <a className="logo" href="https://antoniomelli.kesug.com">
        <span className="iconemundo"><i className="fa-solid fa-globe"></i></span>Antonio Melli
      </a>

      <nav className="nav-menu">
        <a href="#sobre"><span className="numeroheader">01.</span>Sobre mim</a>
        <a href="#experiencia"><span className="numeroheader">02.</span>Experiência</a>
        <a href="#projeto"><span className="numeroheader">03.</span>Projetos</a>
        <a href="#contato"><span className="numeroheader">04.</span>Contato</a>
      </nav>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.header>
  );
}

export default Cabecalho;
