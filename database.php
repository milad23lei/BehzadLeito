<?php

function connectToDataBase()
{
    try {
        return new PDO("mysql:host=localhost;dbname=leitodb", "root", "123456");
    } catch (PDOException $e) {
        die($e->getMessage());
    }
}

function userGet($username, $connect)
{
    $statment = $connect->prepare("SELECT * FROM users WHERE username = :username");
    $statment->bindParam("username", $username);
    $statment->execute();

    $user = $statment->fetch(PDO::FETCH_OBJ);

    return $user ? $user : false;
}


function userSave($data, $connect)
{
    extract($data);
    $statment = $connect->prepare("INSERT INTO users (username , email , password) VALUES (:username , :email , :password)");
    $statment->bindParam("username", $username);
    $statment->bindParam("email", $email);
    $statment->bindParam("password", $password);
    return $statment->execute() ? true : false;
}
