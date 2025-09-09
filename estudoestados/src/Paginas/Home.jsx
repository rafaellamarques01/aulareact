import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Estudo de Estados</h1>

      <div className="conteudo">
        <p>
          O useState é um hook do React que permite adicionar e gerenciar estados em componentes funcionais. Com ele, você pode criar variáveis que armazenam valores dinâmicos, como textos, números ou objetos, e atualizar esses valores conforme o usuário interage com a interface. Sempre que o estado muda, o componente é re-renderizado automaticamente para refletir as novas informações na tela.
        </p>

        <ul>
            <li><Link to="/Exemplo1">Exemplo 1</Link></li>
            <li><Link to="/Exemplo2">Exemplo 2</Link></li>
       </ul>
            <ul>
            <li><a href="/Exercicio1">Exercicio 1</a></li>
            <li><a href="/Exercicio2">Exercicio 2</a></li>
            <li><a href="/Exercicio3">Exercicio 3</a></li>
            <li><a href="/Exercicio4">Exercicio 4</a></li>
            <li><a href="/Exercicio5">Exercicio 5</a></li>
            
        </ul>
      </div>
    </div>
  );
}
        

