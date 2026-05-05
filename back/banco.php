<?php

    // definir credenciais
    $servidor = "127.0.0.1";
    $usuario = "root";
    $senha = "";

    $conexao = new mysql($servidor, $usuario, $senha);

    if ($conexao -> connect_erro){
        die("Erro na conexão: " . $conexao -> connection_error . ".\n");
    } else{
        echo "conectou ao banco de dados com sucesso! \n"
    }
?>