import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import Exemplo1 from "./Paginas/Exemplo1";
import Exemplo2 from "./Paginas/Exemplo2";

import Exercicio1 from "./Paginas/exercicio1";
import Exercicio2 from "./Paginas/Exercicio2";
import Exercicio3 from "./Paginas/Exercicio3";
import Exercicio4 from "./Paginas/Exercicio4";
import Exercicio5 from "./Paginas/Exercicio5";
import Exercicio6 from "./Paginas/Exercicio6";
import Exercicio7 from "./Paginas/Exercicio7";
import Exercicio8 from "./Paginas/Exercicio8";
import Exercicio9 from "./Paginas/Exercicio9";
import Exercicio10 from "./Paginas/Exercicio10";


import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Exemplo1" element={<Exemplo1 />} />
                <Route path="/Exemplo2" element={<Exemplo2 />} />

                <Route path="/Exercicio1" element={<Exercicio1 />} />
                <Route path="/Exercicio2" element={<Exercicio2 />} />
                <Route path="/Exercicio3" element={<Exercicio3 />} />
                <Route path="/Exercicio4" element={<Exercicio4 />} />
                <Route path="/Exercicio5" element={<Exercicio5 />} />
                <Route path="/Exercicio6" element={<Exercicio6 />} />
                <Route path="/Exercicio7" element={<Exercicio7 />} />
                <Route path="/Exercicio8" element={<Exercicio8 />} />
                <Route path="/Exercicio9" element={<Exercicio9 />} />
                <Route path="/Exercicio10" element={<Exercicio10 />} />


            </Routes>
        </BrowserRouter>
    );
}