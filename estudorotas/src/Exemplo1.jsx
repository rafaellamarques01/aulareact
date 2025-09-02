export default function Exemplo1(){
    return(
        <div>
            <h1>Exemplo 1</h1>
            <div classname="conteudo"></div>
            <h3>Exemplo de uso de useState</h3>

            <p>
             o objetivo será somar dois numeros e exibir o resultado na tela
            </p>

            <form>
                <p>
                    digite o primeiro numero <br  />
                    <input type="text"  />
                </p>

                <p>
                    digite o segundo numero <br  />
                    <input type="text"  />
                </p>

                <p>
                    <input type="button" value="calcular"  />
                </p>
            </form>
        </div>
    );
}