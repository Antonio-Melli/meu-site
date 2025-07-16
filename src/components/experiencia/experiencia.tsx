import './experiencia.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Experiencia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            <li className="ativo" data-tab="empresa1">Dial Link</li>
          </ul>

          <div className="descricao-exp">
            <div className="tab ativo" id="empresa1">
              <h3>
                Operador de Telemarketing Receptivo{' '}
                <a href="https://diallink.com.br/" className="link-animado">
                  <span>@Dial Link</span>
                </a>
              </h3>
              <p className="periodo">Abril 2025 — Maio 2025</p>
              <ul>
                <li>
                  Atendimento multicanais, receptivo, e-mail , WhatsApp, Ativo, com destaque para a linguagem correta e gentil, buscando tornar o ambiente mais positivo.
                </li>
                <li>
                  Prestação de suporte técnico ao consumidor, esclarecendo dúvidas, diagnosticando problemas e atendendo solicitações diversas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Experiencia;
