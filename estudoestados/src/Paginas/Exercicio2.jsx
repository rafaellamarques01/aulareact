import {useState} from "react"

export default function Exercicio2()
{
    
    const[numero, setNumero ] = useState(0);
    const[resultado, setResultado ] = useState(0);

    
    function calcular()
    {
        let celsius;

        celsius = ((Number(numero) - 32) * 5)/9;

        setResultado("graus celsius: " + celsius);

    }

    return(
        <div>
            <h1>Exercicio 2</h1>
            <div classname="conteudo"></div>

        <h3>calculo da temperatura em graus Fahrenheit:</h3>

            <form>
                <p>
                    digite a temperatura em graus Fahrenheit:<br  />
                    <input type="text"  value={numero}
                    onChange={(e)=> setNumero(e.target.value)}/>
                </p>

                <p>
                    <b>resultado</b>
                    <br  />
                    fehrenheit é {numero} <br />
                    resultado em celsius é {resultado}
                </p>

                <p>
                    <input type="button" value="Execicio2"  onClick ={calcular}/>
                </p>

                
                <p>
                    <a href="/">Voltar</a>
                </p>
            </form>
        </div>
    );
}