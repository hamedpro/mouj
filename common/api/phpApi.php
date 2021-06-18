<?php
include("common.php");
$db = new mysqli('localhost','root','');
$query = "create database if not exists mouj" ; //todo:make sure about utf-8 support 
$db->query($query);
$db->close();

$db = new mysqli('localhost','root','','mouj');

$query = "create table if not exists users(
    id int(10) primary key auto_increment,
    username varchar(100),
    is_admin varchar(100),
    password varchar(100)
)";
if(!$db->query($query)){
    echo $db->error;
};

$query = "create table if not exists transactions(
    id int(10) primary key auto_increment,
    username varchar(100),
    amount int(10),
    info varchar(500),
    category varchar(100)
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
    content varchar(500) 
)";
$db->query($query);

$query = "create table if not exists logs(
    id int(5) primary key auto_increment,
    content varchar(500) 
)";
$db->query($query);


class api{
    public $db;
    public function __construct($db){
        $this->db = $db;
    }
    public function delete_database(){
        $query = "drop database if exists mouj";
        if($this->db->query($query)) return true;
    }

    public function new_log($content){
        $query = "insert into logs (content) values ('$content')";
        return $this->db->query($query);
    }
    public function get_logs(){
        return get_table_as_json($this->db,'logs');
    }
    
    public function new_transaction($username,$category,$amount,$info){
        $query = "insert into transactions (category,amount,info,username) values ('$category','$amount','$info','$username')";
        return $this->db->query($query);
    }
    public function get_transactions(){
        return get_table_as_json($this->db,'transactions');
    }
    public function delete_transaction($transaction_id){
        $query = "delete from transactions where id = $transaction_id";
        return $this->db->query($query);
    }
    //this class is tested until here
    public function delete_all_transactions(){
        drop_table($this->db,'transactions');
    }
    public function new_user($username){ 
        $query = "insert into users (username) values ('$username')";
        return $this->db->query($query);
    }
    //tested until here
    public function get_all_users(){
        return get_table_as_json($this->db,'users');
    }
    public function delete_all_users(){
        drop_table($this->db,'users');
    }
    //ok
    public function is_username_available($username){
        $query = "select * from users where username = '$username'";
        $results = $this->db->query($query);
        if(mysqli_num_rows($results) == 0){
            return true;
        }else{
            return false;
        };
    }
    public function make_user_admin($username){
        $q = "update users set is_admin = 'true' where username='$username'";
        return $this->db->query($q);
    }
    public function change_admin_password($username,$new_password){
        $q = "update users set password = '$new_password' where username = '$username'";
        return $this->db->query($q);
    }
    
    public function verify_admin_password($username,$password){
        $q = "select password from users where username = '$username'";
        $q_results = $this->db->query($q);
        $row = mysqli_fetch_assoc($q_results);
        return $row['password'] == $password;
    }
    //ok
    
    public function new_support_message($username,$content,$subject){
        $query = "insert into support_messages (username,subject,content) values ('$username','$subject','$content')";
        if($this->db->query($query)){
            return true;
        }else{
            return $this->db->error;
        }
    }
    
    public function is_support_message_open($support_message_id){
        $query = "select status from support_messages where id = $support_message_id";
        if(mysqli_fetch_assoc($this->db->query($query))['status'] == 'open'){
            return true;
        };
    }
    
    public function toggle_support_message_status($support_message_id){
        if($this->is_support_message_open()){
            $query = "update support_messages set status = 'closed' where id = $support_message_id";
            $this->db->query($query);
        }else{
            $query = "update support_messages set status = 'open' where id = $support_message_id";
            $this->db->query($query);
        }
    }
    public function delete_all_support_messages(){

    }
    public function delete_support_message($support_message_id){

    }
    public function get_support_messages(){

    }
    public function new_plan(){

    }
    public function finish_plan($plan_id){

    }
    public function get_plan_data($plan_id){

    }
    public function update_plan(){

    }
    public function reset_all_plans(){

    }
    
}

$api = new api($db);
