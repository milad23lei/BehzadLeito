<?php

require_once "functions.php";
$status = null;

AuthLogout();

if (isPost()) {
    extract($_POST);
    if (validation_required([$username, $email, $password])) {
        if (validation_email($email)) {
            $password = hash_hmac("sha256", $password, "secret");

            $data = [
                "username" => $username,
                "email" => $email,
                "password" => $password
            ];

            $connect = connectToDataBase();

            if (!userGet($username, $connect)) {
                userSave($data, $connect) ? redirect("login.php") : $status = " your info not saved please try again ";
            } else {
                $status = "username is exists";
            }
        } else {
            $status = "Invalid email format";
        }
    } else {
        $status = "username and email and password is required";
    }
}

require "view/register.view.php";
