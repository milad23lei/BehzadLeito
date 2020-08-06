<?php


require_once "database.php";
session_start();

function isPost()
{
    return $_SERVER["REQUEST_METHOD"] == "POST";
}

function redirect($location)
{
    header("location: {$location}");
    die;
}


function AuthLogout($location = "index.html")
{
    if (isset($_SESSION['username'])) {
        redirect($location);
    }
}

function validation_required($items)
{
    $counter_error = 0;
    foreach ($items as $item) {
        if (empty($item))
            $counter_error++;
    }
    return $counter_error == 0;
}

function validation_email($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}


function AuthLogin($location = "login.php")
{
    if (!isset($_SESSION['username'])) {
        $username = $_COOKIE['username'];
        $password = $_COOKIE['password'];
        if (isset($username) && isset($password)) {
            $connect = connectToDataBase();
            $user = userGet($username, $connect);
            if ($user) {
                if ($password == $user->password) {
                    $_SESSION['username'] = $username;
                    redirect("adminpanel.php");
                }
            }
        }
        redirect($location);
    }
}

function old($key)
{
    if (!empty($_REQUEST[$key]))
        return htmlspecialchars($_REQUEST[$key]);
    return '';
}
