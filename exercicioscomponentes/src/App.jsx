import Exemplo1 from "./componentes/exemplo1"
import Exercicio2 from "./componentes/exercicio2"
import Exercicio3 from "./componentes/exercicio3"
import Exercicio4 from "./componentes/exercicio4"
import Exercicio5 from "./componentes/exercicio5"

export default function App()
{
  return (
    <div>
      <h1>exercicios de componentes</h1>

     <Exemplo1 numero1={10} numero2={5} />
     <Exemplo1 numero1={50} numero2={45.98} />

     <h1>chamadas para o exercicio 2</h1>
      <Exercicio2 peso="80" altura="1.80" />
      <Exercicio2 peso="60" altura="1.60" />


      <h1>chamadas para o Exercicio 3</h1>
      <Exercicio3 valor={100} taxa={10} tempo={2} />
      <Exercicio3 valor={100} taxa={10} tempo={10} />
     
      <h1> Chamada para o exercicio 4</h1>
      <Exercicio4 tipo={"retangulo"} base={100} altura={30}/>
      <Exercicio4 tipo={"triangulo"} base={100} altura={30}/>

      <h3>chamadas para o Exercicio 5</h3>
      <Exercicio5 quantidadeC="10" />
      <Exercicio5 quantidadeC="20" />
    </div>
  )

}

    