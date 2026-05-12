<?php

// CREDENCIAIS
$servidor = "127.0.0.1";
$usuario  = "root";
$senha    = "";

$conexao = new mysqli($servidor, $usuario, $senha, "empresa");

if ($conexao->connect_error) {
    die("Erro de conexao: " . $conexao->connect_error . "\n");
}

// FUNÇÃO
function buscarFuncaoFuncionario($conexao, $nomeFuncionario) {

    $sql = "SELECT f.nome, fu.descricao
            FROM funcionarios f
            JOIN funcoes fu ON f.id_funcao = fu.id
            WHERE f.nome = ?";

    $stm = $conexao->prepare($sql);
    $stm->bind_param("s", $nomeFuncionario);
    $stm->execute();
    $resultado = $stm->get_result();

    if ($resultado->num_rows == 0) {
        echo "Funcionario \"$nomeFuncionario\" nao encontrado.\n";
        return;
    }

    $linha = $resultado->fetch_assoc();
    echo "Funcionario " . $linha['nome'] . " tem a funcao " . $linha['descricao'] . "\n";
}

// CHAMADA
buscarFuncaoFuncionario($conexao, "Joao");