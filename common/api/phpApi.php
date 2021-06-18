<?php


$query = "create database if not exists mouj" ; //todo:make sure about utf-8 support 
$db->query($query);
$db->close();

$db = new mysqli('localhost','root','','mouj');

$query = "create table if not exists main(
    id int(4) primary key auto_increment,
    keyword varchar(200),
    value varchar(200)
)";
if(!$db->query($query)){
    echo $db->error;
};

$query = "create table if not exists users(
    id int(10) primary key auto_increment,
    username varchar(100)
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

$query = "create table if not exists done_works(
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
    public function delete_database(){
        $query = "drop database if exists vahed";
        return $this->db->query($query) ? true : $this->db->error;
    };

    public function new_log(){
        $content = $_REQUEST['content'];
        $query = "insert into logs (content) values ('$content')";
        return $this->db->query($query) == true ? true : $this->db->error;
    }
    public function get_logs(){
        
    }
    public function get_transactions(){
        
    };
    public function is_username_available($username){
        $query = "select * from users where username = '$username'";
        $results = $this->db->query($query);
        if(mysqli_num_rows($results) == 0){
            return true;
        }else{
            return false;
        };
    };
    public function new_user($username){
        
        $query = "insert into users (username) values ('$username')";
        if($this->db->query($query)){
            return true;
        }else{
            return $this->db->error;
        };
    };
    public function new_admin($username,$password){

    }
    public function verify_admin_password($username,$password){

    }
    public function change_admin_password($username,$new_password){

    }
    public function get_all_users(){

    }
    public function delete_all_users(){
        
    }
    public function new_transaction($username,$category,$amount,$info){
        $query = "insert into transactions (category,amount,info,username) values ('$category','$amount','$info','$username')";
        return $this->db->query($query) ?  true : false;
    };
    public function delete_transaction($transaction_id){

    };
    public function delete_all_transactions(){

    };
    public function new_support_message($username,$content,$subject){
        $query = "insert into support_messages (username,subject,content) values ('$username','$subject','$content')";
        if($this->db->query($query)){
            return true;
        }else{
            return $this->db->error;
        }
    };
    
    public function is_support_message_open($support_message_id){
        $query = "select status from support_messages where id = $support_message_id";
        if(mysqli_fetch_assoc($this->db->query($query))['status'] == 'open'){
            return true;
        };
    };
    
    public function toggle_support_message_status($support_message_id){
        if($this->is_support_message_open()){
            $query = "update support_messages set status = 'closed' where id = $support_message_id";
            $this->db->query($query);
        }else{
            $query = "update support_messages set status = 'open' where id = $support_message_id";
            $this->db->query($query);
        }
    };
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

