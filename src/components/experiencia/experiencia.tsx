// CSS de experiencia
import './experiencia.css';

// Imports do React/bibliotecas
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';


//Função que será exportada
function Experiencia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const tabs = document.querySelectorAll('.lista-empresas li');
    const tabContents = document.querySelectorAll('.descricao-exp .tab');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('ativo'));
        tabContents.forEach(tc => tc.classList.remove('ativo'));

        tab.classList.add('ativo');
        tabContents[index].classList.add('ativo');
      });
    });

    return () => {
      tabs.forEach(tab => {
        const clone = tab.cloneNode(true);
        if (tab.parentNode) {
  tab.parentNode.replaceChild(clone, tab);
}
      });
    };
  }, []);

  return (
    <div className="Experiencia">
      <motion.section
        className="experiencia"
        id="experiencia"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2><span className="numero">02.</span> Onde Trabalhei</h2>
        <div className="conteudo-exp">
          <ul className="lista-empresas">
            <li className="ativo" data-tab="empresa1">Mundial Informática</li>
            <li data-tab="empresa2">Dial Link</li>
          </ul>

          <div className="descricao-exp">
            <div className="tab ativo" id="empresa1">
              <h3>
                Suporte Técnico{' '}
                <a href="https://www.mundialinformatica.com.br/" className="link-animado" target="_blank" rel="noreferrer">
                  <span>@Mundial Informática</span>
                </a>
              </h3>
              <p className="periodo">Agosto 2025 - Atual</p>
              <ul>
                <li>Atendimento técnico especializado a clientes de médio e grande porte.</li>
                <li>Elaboração de relatórios técnicos e sugestões de melhorias para processos internos.</li>
              </ul>
            </div>

            <div className="tab" id="empresa2">
              <h3>
                Operador de Telemarketing Receptivo{' '}
                <a href="https://diallink.com.br/" className="link-animado" target="_blank" rel="noreferrer">
                  <span>@Dial Link</span>
                </a>
              </h3>
              <p className="periodo">Abril 2025 — Maio 2025</p>
              <ul>
                <li>Atendimento multicanais (e-mail, WhatsApp, receptivo e ativo) com foco em linguagem correta e gentil.</li>
                <li>Suporte técnico ao consumidor, esclarecendo dúvidas e solucionando problemas diversos.</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Experiencia;

