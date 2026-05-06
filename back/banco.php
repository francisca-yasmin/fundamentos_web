<?php

    //CREDENCIAIS
    $servidor = "127.0.0.1";
    $usuario = "root";
    $senha = "";

    $conexao = new mysqli($servidor, $usuario, $senha);

    if($conexao -> connect_error){
        die("Vish: " . $conexao->connect_error . "\n");
    }else{
        echo "Ah\n";
    }

    //criando database:
    $database = "aula_php_banco";
    $sql_criar_database = "CREATE DATABASE IF NOT EXISTS $database";

    if($conexao -> query($sql_criar_database) == true){
        echo "Banco ". $database . " criado com sucesso\n";
    }else{
        die("Vish: " . $database . "\n");
    }

    //criando tabela:
    $conexao->select_db($database);
    $sql_criar_tabela = "
    CREATE TABLE IF NOT EXISTS alunos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ; 
    ";

    if ($conexao->query($sql_criar_tabela) == true){
        echo "Table criada com sucesso!\n";
    } else {
        die("Erro ao criar tabela!!!\n");
    }

    //insert
    $nome= "fran";
    $email = "fran
    @gmail.com";
    
    $sql_insert = "INSERT INTO aluno (nome, email) VALUES (?, ?)";
    $stm = $conexao->prepare(sql_insert);
    $stm -> bind_param("ss", $nome, $email);

    // criar função no php e receber um parametro -> um nome no caso
    // echo "a função do banco eh" funcao
    //passar o nome de alguem que existe, e printa a pessoa e a função
    // se nao existir no banco, vc mostra que o usuario nao foi encontrado


?>