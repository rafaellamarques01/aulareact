export default function Exercicio2( {peso,altura})
{
    let imc = Number( peso) / (altura * altura);
    return(
        <div>
            <p>
                o IMC é: {imc}
            </p>
        </div>
    )



}