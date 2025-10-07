import { useState } from "react";

export default function Exercicio1() 
{
    //variavel de estado para os campos do formulário
    const[numero, setNumero] = useState(0);

    //variavel de estado para o resultado
    const[resultado, setResultado] = useState(0);

    //função para calcular o quadrado ou o cubo 
    function calcular()
    {
      let quadrado, cubo;

      quadrado = Number(numero) * Number(numero);
      cubo = Number(numero) * Number(numero) * Number(numero);

      setResultado("quadrado: " + quadrado + " - cubo:" + cubo);
    }

return(
    <div>
        <h1>Exercicio 1</h1>
        <div className="conteudo">
           
    <form>
        <p>
            digite um numero qualquer <br />
            <input type="text" value={numero}
           onChange={(e) => setNumero(e.target.value)} />
           
        </p>
       
       <p>
        <input type="button" value="Exercicio1" onClick={calcular} />
       </p>

        <p>
            <b>Resultado</b>
            <br   />
            número é {numero} <br  />
            resultado é {resultado}
      </p>

       <p> 
        <a href="/">Voltar</a>
      </p>

        </form>   
        </div>
        </div>     
);

}