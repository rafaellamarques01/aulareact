import "./App.css";


export default function App()
{
   const estilo = {
    color : "red",
   textAlign : "center"
   };

    return (
        <div className="conteudo">
            <h1>Estudo CSS</h1>
            
            <p>
                CSS (<i>Cascading Style Sheets</i>) é uma linguagem utilizada para estilizar as <b>páginas web</b>. Com ela podemos definir:
            </p>

            <ul>
                <li>cores de fundo, do texto e dos elementos.</li>
                <li>Fontes e tamanho das letras </li>
                <li>Posicionamento dos elementos na pagina</li>
                 <li>Espaçamento, bordas, sombras, etc. </li>
                 <li>Efeitos visuais e animações</li>
            </ul>
                  <h3> style={estilo}Cidade De Mococa</h3>

              <p className="centro">
                <img src="mococa.jpg" alt=""  />
              </p>
        </div>
    );
}