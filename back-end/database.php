<?php
$server_name = 'localhost';
$username = 'root';
$password = '';

//db_instanceect to mysql => 
$db_instance = new mysqli(
    $server_name,
    $username,
    $password
);

//create database for first time =>
$query = "create database if not exists vahed" ; //make sure for utf-8 support
$db_instance->query($query);
$db_instance->close();

//connect to database =>
$db_instance = new mysqli(
    $server_name,
    $username,
    $password,
    'vahed'
);
//pre configure database for first time =>
$query = "create table if not exists main(
    id int(4) primary key auto_increment,
    keyword varchar(200),
    value varchar(200)
)";
if(! $db_instance->query($query)){
    echo $db_instance->error;
};

$query = "create table if not exists users(
    id int(10) primary key auto_increment,
    username varchar(100),
    admin_privileges varchar(20)

)";
if(! $db_instance->query($query)){
    echo $db_instance->error;
};

$query = "create table if not exists transactions(
    id int(10) primary key auto_increment,
    username varchar(100),
    amount int(10),
    info varchar(500),
    category varchar(100)
)";
$db_instance->query($query);

$query = "create table if not exists support_messages(
    id int(5) primary key auto_increment,
    type varchar(50),
    sender_username varchar(100),
    message varchar(500),
    status varchar(50)
)";
$db_instance->query($query);

$query = "create table if not exists done_works(
    id int(5) primary key auto_increment,
    title varchar(100),
    content varchar(500) 
)";
$db_instance->query($query);