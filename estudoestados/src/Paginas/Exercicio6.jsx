import {useState} from "react"

export default function Exercicio6() {

    const[quant, setQuant] = useState(0);
    const[preco, setPreco] = useState(0);
    const[resultado, setResultado] = useState(0);

   function calcular()
{
    let subtotal, desconto, valorfinal;

    subtotal= Number(quant)*Number(preco);
    desconto= Number(subtotal)*0.10;
    valorfinal= Number(subtotal)-Number(desconto);

    setResultado("subtotal: " + subtotal + "- desconto: " + desconto + "- valor final" + valorfinal);

}

   return(

        <div>
            <h1>Exercicio 6</h1>
            <div className="conteudo">
    
        <form>
            <p>
                digite a quantidade: <br />
                <input type="text" value={quant} 
                onChange={(e) => setQuant (e.target.value)} />
            </p>
           
            <p>
                digite o preço: <br />
                <input type="text" value={preco} 
                onChange={(e) => setPreco (e.target.value)}/>
            </p>

           <p>
            <input type="button" value="calcular" onClick={calcular} />
           </p>
    
    <p>
        <b>resultado</b>
        <br  />
        {resultado}
   </p>

           <p> 
            <a href="/">Voltar</a>
          </p>
    
            </form>   
            </div>
            </div>     
    );
    
    }