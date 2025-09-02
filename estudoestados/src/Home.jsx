import {link} from "react-router-dom";
export default function Home() {
    return(
        <di>
            <h1>Estudo de Estados</h1>

            <div ClassName="conteúdo">
           </div>
           <p>
            o useState é um hook do react que permite adicionar e gerenciar estados em componentes funcionais. 
           </p>

           <ul>
            <li><Link to="/exemplo1">Exemplo 1</Link></li>
             <li><Link to="/exemplo2">Exemplo 2</Link></li>
           </ul>
        </di>
    );
   }