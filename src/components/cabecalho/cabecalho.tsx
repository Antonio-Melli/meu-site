// CSS do componente Cabeçalho
import './cabecalho.css'; // CSS do cabeçalho

// Bibliotecas e hooks necessários
import { toggleMobileMenu } from '../animacoes/animacoes.tsx'; // Animação de hamburger para o menu mobile
import { motion, useAnimation } from 'framer-motion'; // Biblioteca da Framer Motion
import { useEffect, useState } from 'react'; // Hooks useEffect e useState do React, para animações



// Componente para cabeçalho 
function Cabecalho() {
  // Animação para o cabeçalho ao descer e ao subir a página, importada do Framer Motion
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  // Função para lidar com o scroll da página
  const handleScroll = () => {
  const currentScrollY = window.scrollY;

    // Verifica se o usuário está rolando para baixo ou para cima
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Rolando pra baixo, esconde
      controls.start({ y: '-100%' });
    } else {
      // Rolando pra cima, mostra
      controls.start({ y: 0 });
    }
    setLastScrollY(currentScrollY); // Atualiza o último scroll Y
  };

  // Adiciona o listener de scroll quando o componente é montado e remove quando é desmontado
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  
  // Cabeçalho com animação de rolagem
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

// Exporta o componente cabeçalho para utiliza-lo em app
export default Cabecalho;
