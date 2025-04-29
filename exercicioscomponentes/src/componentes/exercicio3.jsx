export default function Exercicio3( {valor, tempo, taxa})
{
    let resultado = (valor*(taxa/100) * tempo);
    return(
        <div>
            <p>
                o valor parcela atualidade é: {resultado}
            </p>
        </div>
    )
}