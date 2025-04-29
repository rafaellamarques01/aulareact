export default function Exercicio5 ({quantidadeC})

let salariob = quantidadeC * 150;
let aliquota = (8/100)*salariob;
let salarioL = salariob - aliquota;

return(
    <div>
        <h3>resultado</h3>
        quantidade de consultas: {quantidadeC}
        <br></br>
        o salario bruto é: {salariob} R$
        <br></br>
        o desconto INSS é: {aliquota} R$
        <br></br>
        o salario liquido é: {salarioL} R$
   </div>
);