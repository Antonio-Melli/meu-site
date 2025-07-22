// CSS do componente de rodapé
import './rodape.css';

// Bibliotecas e hooks necessários
import { toggleMobileMenu } from '../animacoes/animacoes.tsx'; // Animação de hamburger para o menu mobile


// Componente de rodapé
function Rodape() {

  
  // Renderiza o rodapé com links para redes sociais e informações de contato
  return (
    <div className="rodape">
      <footer>
        <div className="social-bar">
          <ul>
            <li className="listanmexer"><a href="https://github.com/Antonio-Melli"><i className="fa-brands fa-github"></i></a></li>
            <li className="listamexer"><a href="https://www.instagram.com/antmelli2/"><i className="fa-brands fa-instagram"></i></a></li>
            <li className="listamexer"><a href="https://www.linkedin.com/in/antonio-melli-b1598926a/"><i className="fa-brands fa-linkedin"></i></a></li>
            <li className="listamexer"><a href="https://wa.me/551985967435"><i className="fa-brands fa-whatsapp"></i></a></li>
          </ul>
        <div className="vertical-line"></div>
        </div>
        <p className="pfooter">Feito e criado por Antonio Melli</p>
      </footer>

<nav className="mobile-nav" id="mobileNav">
  <div className="close-btn" onClick={toggleMobileMenu}>×</div>
    <ul>
      <li><a href="#sobre"><span className="numeroheader">01.</span> Sobre mim</a></li>
      <li><a href="#experiencia"><span className="numeroheader">02.</span> Experiência</a></li>
      <li><a href="#projeto"><span className="numeroheader">03.</span> Projetos</a></li>
      <li><a href="#contato"><span className="numeroheader">04.</span> Contato</a></li>
    </ul>
</nav>

    </div>
  );
}

// Exporta o componente Rodape para utiliza-lo em app
export default Rodape;