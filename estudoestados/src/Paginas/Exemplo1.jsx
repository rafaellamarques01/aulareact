import { useState } from "react";
export default function Exemplo1() {
  const[numero1, setNumero1] = useState(0);
  const[numero2, setNumero2] = useState(0);
  const[resultado, setResultado] = useState();

function somar()
{


}

function limpar()
{

  
}



  return (
    <div>
      <h1>Exemplo 1</h1>
      <form>
      <p>
      Digite a quantidade <br />
      <input type="text" />
    </p>

    <p>
      Digite o preço <br />
      <input type="text" />
      </p>

        <p>
          <input type="burron"  value="calcular" />
        </p>
      </form>
    </div>
  );
}
