import React from "react";
import produtos from "../../data/produtos";
import "./ListaProdutos.css"

export default () => {
    const trsProdutos = produtos.map((produto, i)=>{
        return(
            <tr key={produto.id} className={i % 2 === 0 ? "Par" : ""}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toFixed(2).replace(".", ",")}</td>
            </tr>
        )
    })

    return(
        <div className="TabelaProdutos">
            <table style={{border: 1}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {trsProdutos}
                </tbody>
            </table>
        </div>  
    )
}