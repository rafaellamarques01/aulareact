import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioJaneiro from "./Paginas/RioJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";

import Parana from "./Paginas/Parana";
import RioGrandeSul from "./Paginas/RioGrandeSul";
import SantaCatarina from "./Paginas/SantaCatarina";

import Acre from "./Paginas/Acre";
import Amapa from "./Paginas/Amapa";
import Amazonas from "./Paginas/Amazonas";
import Para from "./Paginas/para";
import Rondonia from "./Paginas/Rondonia";
import Roraima from "./Paginas/Roraima";
import Tocantins from "./Paginas/Tocantins";


import DistritoFederal from "./Paginas/DistritoFederal";
import Goias from "./Paginas/Goias";
import MatoGrosso from "/.Paginas/MatoGrosso";
import MatoGrossoSul from "./Paginas/MatoGrossoSul";
import "./App.css";



export default function App()
{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sp" element={<SaoPaulo />} />
            <Route path="/rj" element={<RioJaneiro />}  />
            <Route path="/mg" element={<MinasGerais  />}  />
            <Route path="/es" element={<EspiritoSanto  />}  />

            <Route path="/pr" element={<Parana  />}   />
            <Route path="/sc" element={<SantaCatarina />}  />
            <Route path="/rs" element={<RioGrandeSul  />}   />

            <Route path="/ac" element={<Acre  />}   />
            <Route path="/am" element={<Amapa  />}  />
            <Route path="/amz" element={<Amazonas />}  />
            <Route path="/pa" element={<Para  />}  />
            <Route path="/ro" element={<Rondonia  />}  />
            <Route path="/rr" element={<Roraima  />}  />
            <Route path="/to" element={<Tocantins  />}  />

            <Route path="/DF" element={<DistritoFederal  />}   />
            <Route path="/GO" element={<Goias  />}  />
            <Route path="/MT" element={<MatoGrosso  />}  />
            <Route path="/MS" element={<MatoGrossoSul  />}  />
            
        </Routes>
        </BrowserRouter>
    );
}