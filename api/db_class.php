<?php
class db{
    public $conn = NULL;
    public function __construct(){
        $db = new mysqli('localhost','root','');
        $query = "create database if not exists mouj" ; //todo:make sure about utf-8 support 
        $db->query($query);
        $db->close();

        $db = new mysqli('localhost','root','','mouj');

        $query = "create table if not exists users(
            id int(10) primary key auto_increment,
            username varchar(100),
            is_admin varchar(100),
            password varchar(100),
            phone_number int(15)
        )";
        if(!$db->query($query)){
            echo $db->error;
        };

        $query = "create table if not exists transactions(
            id int(10) primary key auto_increment,
            username varchar(100),
            amount int(10),
            info varchar(500),
            category varchar(100),
            plan_id int(6)
        )";
        $db->query($query);

        $query = "create table if not exists support_messages(
            id int(5) primary key auto_increment,
            username varchar(50),
            subject varchar(100),
            content varchar(500),
            status varchar(100)
        )";
        $db->query($query);

        $query = "create table if not exists plans(
            id int(5) primary key auto_increment,
            title varchar(100),
            description varchar(500),
            starter_username varchar(100),
            status varchar(100),
            final_amount_as_rial int(10),
            start_date varchar(100),
            end_date varchar(100)

        )";
        $db->query($query);

        $query = "create table if not exists logs(
            id int(5) primary key auto_increment,
            content varchar(500) 
        )";
        $db->query($query);
        $this->conn = $db;
    }
}