<?php
include('database.php');

function is_username_available(){
    global $db_instance;
    $username = $_REQUEST['username'];
    $query = "select * from users where username = '$username'";
    $results = $db_instance->query($query);
    if($results == false){
        echo $db_instance->error;
    };
    if(mysqli_num_rows($results) == 0){
        echo 'true';
    }else{
        echo 'false';
    };
};
function add_new_user(){
    $username = $_REQUEST['username'];
    $admin_privileges = "false";
    global $db_instance;
    $query = "insert into users (username,admin_privileges) values ('$username','$admin_privileges')";
    if($db_instance->query($query)){
        echo "true";
    }else{
        echo $db_instance->error;
    };
};
function get_users_as_json(){
    global $db_instance;
    $query = "select * from users";
    $results = [];
    $query_results = $db_instance->query($query);
    while($row = mysqli_fetch_assoc($query_results)){
        $results[] = $row;
    };
    echo json_encode($results);
};

function get_value_from_main_table(){
    global $db_instance;
    $keyword = $_REQUEST['keyword'];
    $query = "select value from main where keyword = '$keyword'";
    if($results = $db_instance->query($query)){
        echo mysqli_fetch_assoc($results)['value'];
    }else{
        echo $db_instance->error;
    };

};
function set_value_in_main_table(){
    global $db_instance;
    $keyword = $_REQUEST['keyword'];
    $value = $_REQUEST['value'];
    
    $query = "insert into main (keyword,value) values ('$keyword','$value')";
    if($results = $db_instance->query($query)){
        echo 'true';
    }else{
        echo $db_instance->error;
    };
};
function new_transaction(){
    global $db_instance;
    $category = $_REQUEST['category'];
    $amount = (int)$_REQUEST['amount'];
    $info = isset($_REQUEST['info']) ? $_REQUEST['info'] : "nothing";
    $username = $_REQUEST['username'];

    $query = "insert into transactions (category,amount,info,username) values ('$category','$amount','$info','$username')";
    echo $db_instance->query($query) ?  'true' : 'false';
};
function new_issue(){
    global $db_instance;
    $type = $_REQUEST['type'];
    $sender_username = $_REQUEST['sender_username'];
    $message = $_REQUEST['message'];

    $query = "insert into support_messages (type,sender_username,message) values ('$type','$sender_username','$message')";
    if($db_instance->query($query)){
        echo 'true';
    }else{
        echo $db_instance->error;
    }
};
function is_issue_open(){
    global $db_instance;
    $issue_id = (int)$_REQUEST['issue_id'];
    $query = "select status from support_messages where id = $issue_id";
    if(mysqli_fetch_assoc($db_instance->query($query))['status'] == 'open'){
        echo 'true';
        return true;
    };
};
function get_issues_as_json(){
    global $db_instance;
    $query = "select * from support_messages";
    $results = [];
    $query_results = $db_instance->query($query);
    while($row = mysqli_fetch_assoc($query_results)){
        $results[] = $row;
    };
    echo json_encode($results);
};
function toggle_issue_status(){
    global $db_instance;
    $issue_id = (int)$_REQUEST["issue_id"];
    if(is_issue_open()){
        $query = "update support_messages set status = 'closed' where id = $issue_id";
        $db_instance->query($query);
    }else{
        $query = "update support_messages set status = 'open' where id = $issue_id";
        $db_instance->query($query);
    }
};
function get_done_works_as_json(){
    global $db_instance;
    $query = "select * from done_works";
    $results = [];
    $query_results = $db_instance->query($query);
    while($row = mysqli_fetch_assoc($query_results)){
        $results[] = $row;
    };
    echo json_encode($results);
    
};
function new_done_work(){
    global $db_instance;
    $title = $_REQUEST['title'];
    $content = $_REQUEST['content'];

    $query = "insert into done_works (title,content) values ('$title','$content')";
    if($db_instance->query($query)){
        echo "true";
    }else{
        echo $db_instance->error;
    };
};
function get_user_transactions_as_json(){
    global $db_instance;
    $username = $_REQUEST['username'];
    $query = "select * from transactions where username = '$username'";
    $results = [];
    if(!$db_instance->query($query)){echo $db_instance->error;};
    $query_results = $db_instance->query($query);
    while($row = mysqli_fetch_assoc($query_results)){
        $results[] = $row;
    };
    echo json_encode($results);
};
function get_transactions_as_json(){
    global $db_instance;
    $query = "select * from transactions";
    $results = [];
    if(!$db_instance->query($query)){echo $db_instance->error;};
    $query_results = $db_instance->query($query);
    while($row = mysqli_fetch_assoc($query_results)){
        $results[] = $row;
    };
    echo json_encode($results);
};
