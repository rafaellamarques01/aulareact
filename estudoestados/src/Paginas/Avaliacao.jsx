import { useState } from "react";
export default function Avaliacao()
{
   const[km,setKm] = useState('');
   const[dias, setDias] = useState ('');
   const[total, setTotal] = useState (null);
}
   function calcular() 
   {
     const precodia = dias * 90;
     const precokm = km * 0.20;
     const precototal = precodia + precokm;
     setTotal(precototal.toFixed(2));
   }

   return (
    <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Locadora de Carros FATEC Mococa</h2>

        <div>
            <label>km percorrido:</label>
            <input type="Number" value="km" onChange={(e) =>setKm(e.target.value)} />
            </div>
          
            <div>
            <label>dias alugados:</label>
            <input type="Number" value="dias" onChange={(e) =>setDias(e.target.value)}  />
            </div>

                <button onClick={calcular}>calcular preço</button>
                {total & <p>preço total a pagar: R${total}</p>}

              </div>

   );
   }