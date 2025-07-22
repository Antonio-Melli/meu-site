// Componentes para o Aplicativo
import Cabecalho from './components/cabecalho/cabecalho.tsx'; // Componente do cabeçalho
import Navegacao from './components/sobremim/sobremim.tsx'; // Componente do sobre mim
import Conhecimento from './components/conhecimento/conhecimento.tsx'; // Componente de conhecimento profissional
import Experiencia from './components/experiencia/experiencia.tsx'; // Componente de experiências profissionais
import Projetos from './components/projetos/projetos.tsx'; // Componente de projetos
import Contato from './components/contato/contato.tsx'; // Componente de contato
import Rodape from './components/rodape/rodape.tsx'; // Componente de rodapé
import Animacoes from './components/animacoes/animacoes.tsx'; // Componente de animações

// Estilos e dependências
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando Font Awesome para ícones
import './style.css'; // Importando o CSS principal do aplicativo
import './index.css'; // Importando o CSS de estilos globais    
import './images.d.ts'; // Importando definições de tipos para imagens


// Componente principal do aplicativo
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

// Exportando o componente App para ser utilizado no index.tsx
export default App;
