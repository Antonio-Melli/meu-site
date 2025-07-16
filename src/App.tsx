
import Cabecalho from './components/cabecalho/cabecalho.tsx';
import Navegacao from './components/sobremim/sobremim.tsx';
import Conhecimento from './components/conhecimento/conhecimento.tsx';
import Experiencia from './components/experiencia/experiencia.tsx';
import Projetos from './components/projetos/projetos.tsx';
import Contato from './components/contato/contato.tsx';
import Rodape from './components/rodape/rodape.tsx';
import Animacoes from './components/animacoes/animacoes.tsx';
import './style.css';
import './index.css';

function App() {
  return (
    <div className="App">

      <Animacoes /> {/* Componente de animações */}
      <Cabecalho /> {/* Componente do cabeçalho */}
      <Navegacao /> {/* Componente do sobre mim */}
      <Conhecimento /> {/* Componente de conhecimento */}
      <Experiencia /> {/* Componente de experiências */}
      <Projetos /> {/* Componente de projetos */}
      <Contato /> {/* Componente de contato */}
      <Rodape /> {/* Componente de rodapé */}
    
    </div>
 
  );
}

export default App;
