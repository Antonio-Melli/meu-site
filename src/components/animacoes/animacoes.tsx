// CSS do componente de animações
import './animacoes.css'; // CSS do cabeçalho

// Bibliotecas e hooks necessários
import React, { useEffect } from 'react'; // Hook useEffect do React, para animações



// Função para alternar o menu mobile
export function toggleMobileMenu() {
  const menu = document.getElementById('mobileNav'); // Obtém o menu mobile
  const body = document.body; // Obtém o body do documento

  menu.classList.toggle('active'); // Alterna a classe 'active' no menu mobile
  body.classList.toggle('blur'); // Adiciona ou remove a classe 'blur' no body
  body.classList.toggle('no-scroll'); // ← impede rolagem
}



// Componente de animações
function Animacoes() {

  useEffect(() => { //Animaçao do inicio 
    const preloader = document.getElementById('preloader'); // Obtém o preloader
    const content = document.getElementById('content'); // Obtém o conteúdo principal
    setTimeout(() => { // Define um tempo para a animação do preloader
      preloader.classList.add('hidden'); // Adiciona a classe 'hidden' ao preloader
      setTimeout(() => { // Espera o tempo da animação para esconder o preloader
        preloader.style.display = 'none'; // Esconde o preloader
        if (content) content.style.display = 'block'; // Exibe o conteúdo principal
      }, 500);
    }, 1000);
    // Fim da Animacao do inicio


    // Mais codigos para o menu mobile
document.querySelectorAll('.mobile-nav a').forEach(link => { // Seleciona todos os links do menu mobile
  link.addEventListener('click', () => { // Adiciona um evento de clique a cada link
    document.getElementById('mobileNav').classList.remove('active'); // Remove a classe 'active' do menu mobile
    document.body.classList.remove('blur', 'no-scroll'); // Remove as classes 'blur' e 'no-scroll' do body
  });


  document.addEventListener("DOMContentLoaded", () => { // Espera o DOM carregar
    const links = document.querySelectorAll(".nav-menu a"); // Seleciona todos os links do menu de navegação


    links.forEach(link => { // Adiciona um evento de clique a cada link
      link.addEventListener("click", () => { // Quando um link é clicado
        links.forEach(l => l.classList.remove("active")); // remove dos outros
        link.classList.add("active"); // adiciona ao clicado
      });
    });
  });

});
  }, []);
// Fim dos codigos para o menu mobile



  // Componente para animações 
  return (
    <div className="Animacoes">
      <div id="preloader">
        <div className="loader-logo">
          <i className="fa-solid fa-globe"></i>
        </div>
      </div>
    </div>
  );
}

// Exporta o componente de animações para utiliza-lo em app
export default Animacoes;