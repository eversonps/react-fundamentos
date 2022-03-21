import React from "react"

import Mega from "./components/mega/Mega"
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"

import "./App.css"
import ListaProdutos from "./components/repeticao/ListaProdutos"



export default () => (
    <div className="App">
        <h1>Fundamentos React (Arrow)</h1>
        <div className="Cards">
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega qtd={8}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (input)" color="#E45F56">
                <Input> </Input>
            </Card>
            
            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#982395">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Par ou Impar" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: "Fernando"}}></UsuarioInfo>
            </Card>

            <Card titulo="#07 - Lista Produtos Repetição" color="rgb(13, 49, 49)">
                <ListaProdutos></ListaProdutos>
            </Card>

            <Card titulo="#06 - Lista Alunos Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Família" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="João"></FamiliaMembro>
                    <FamiliaMembro nome="Maria"></FamiliaMembro>
                    <FamiliaMembro nome="Tiago"></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 - Sorteio" color="#FA6900">
                <Aleatorio valorMax={50} valorMin={10}></Aleatorio>
            </Card>
            
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento /> 
            </Card>
                
            <Card titulo="#02 - Com Parametro" color="#E8B71A">
                <ComParametro titulo="Situação do Aluno" aluno="Mariazinha" nota={9}/>
                <ComParametro titulo="Situação do Aluno" aluno="Joãozinho" nota={3.5}/>
            </Card>
            
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>      
    </div>    
)
