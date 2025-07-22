// CSS do componente de sobre mim
import './sobremim.css';


// Componente de sobre mim
function Navegacao() {


// Sobre mim com animação de fade-in
return (
  <div className="Navegacao">
    <div id="navegacao">
      <div className="sobremim">
        <div className="sobremim-conteudo">
          <h4 className="typing">Olá, meu nome é</h4>
          <h1 className="content-fade">Antonio Melli.</h1>
          <h2 className="content-fade">Eu sou um desenvolvedor web.</h2>
          <p className="content-fade">
            Sou estudante de Análise e Desenvolvimento de Sistemas, dedicado e focado em resultados. 
            Tenho 18 anos e trabalho com desenvolvimento web, utilizando HTML, CSS, JavaScript, React JS e TypeScript. 
            Tenho experiência em criar sites especializados e extensos, buscando sempre oferecer soluções eficientes e 
            bem estruturadas.
          </p>
        </div>
      </div>
    </div>

    </div>
  );
}

// Exporta o componente de sobre mim para utiliza-lo em app
export default Navegacao;