import {useState} from "react"

export default function Exercicio10() {
    return(
        <div>
            <h1>Exercicio 10</h1>
            <div className="conteudo">
    
        <form>
            <p>
                digite o valor da hora: <br />
                <input type="text" />
            </p>
           
            <p>
                digite a quantidade de horas: <br />
                <input type="text" />
            </p>

           <p>
            <input type="button" value="Exercicio10" />
           </p>
    
           <p> 
            <a href="/">Voltar</a>
          </p>
    
            </form>   
            </div>
            </div>     
    )
    
    }