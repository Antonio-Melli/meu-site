import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './animacoes.css';

export function toggleMobileMenu() { /*Inicio dos codigos para o menu mobile */
  const menu = document.getElementById('mobileNav');
  const body = document.body;

  menu.classList.toggle('active');
  body.classList.toggle('blur');
  body.classList.toggle('no-scroll'); // ← impede rolagem
}

function Animacoes() {
  useEffect(() => { /*Animacao do inicio */
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
        if (content) content.style.display = 'block';
      }, 500);
    }, 1000);
    /*Fim da Animacao do inicio */

    /*Mais codigos para o menu mobile */
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileNav').classList.remove('active');
    document.body.classList.remove('blur', 'no-scroll');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-menu a");

    links.forEach(link => {
      link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active")); // remove dos outros
        link.classList.add("active"); // adiciona ao clicado
      });
    });
  });

});
/*Fim dos codigos para o menu mobile */

  }, []);

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

export default Animacoes;