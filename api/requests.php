<?php
include_once('common.php');
include_once('config_db.php');
include_once('db_methods.php');
$db = config_db();
$api = new api($db);
if(!isset($_REQUEST['func'])){
    exit();
};
$func = $_REQUEST['func'];
switch($func){
    case 'delete_database':
        $status = $api->delete_database();
        echo json_encode(['ok'=>$status]);
        break;
    case 'new_log':
        $status = $api->new_log($_REQUEST['content']);
        echo json_encode(['ok'=>$status]);
        break;
    case 'get_logs':
        $logs = $api->get_logs();
        $tmp = [
            'ok'=>gettype($logs) == "array",
            'value'=>$logs
        ];
        echo json_encode($tmp);
        break;
    case 'new_transaction':
        $tmp = [
            'ok'=>$api->new_transaction(
                $_REQUEST['username'],
                (int)$_REQUEST['amount'],
                $_REQUEST['info'],
                $_REQUEST['category'],
                (int)$_REQUEST['plan_id']
            )
        ];
        echo json_encode($tmp);
        break;
    case 'get_transactions':
        $transactions = $api->get_transactions();
        echo json_encode([
            'ok'=>gettype($transactions) == "array",
            'value'=>$transactions
        ]);
        break;
    case 'delete_transaction':
        echo json_encode([
            'ok'=>gettype($api->delete_transaction((int)$_REQUEST['transaction_id'])) == "array"
        ]);
        break;
    case 'delete_transactions':
        echo json_encode([
            'ok'=>$api->delete_transactions()
        ]);
        break;
    case 'new_user':
        echo json_encode([
            'ok'=>$api->new_user($_REQUEST['username'])
        ]);
        break;
    case 'get_users':
        echo json_encode([
            'ok'=>gettype($api->get_users()) == 'array',
            'value'=>$api->get_users()
        ]);
        break;
    case 'delete_users':
        echo json_encode([
            'ok'=>$api->delete_users()
        ]);
        break;
    case 'delete_user':
        echo json_encode([
            'ok'=>$api->delete_user($_REQUEST['username'])
        ]);
        break;
    case 'is_username_available':
        $res = $api->is_username_available($_REQUEST['username']);
        echo json_encode([
            'ok'=>gettype($res) == 'boolean',
            'value'=>$res == true
        ]);
        break;
    case 'user_exists':
        $res = $api->does_user_exist($_REQUEST['username']);
        echo json_encode([
            'ok'=>gettype($res) == 'boolean',
            'value'=>$res == true
        ]);
        break;
    case 'make_user_admin':
        echo json_encode([
            'ok'=>$api->make_user_admin($_REQUEST['username'],$_REQUEST['password'])
        ]);
        break;
    case 'verify_admin_password':
        $res = $api->verify_admin_password($_REQUEST['username'],$_REQUEST['password']);
        echo json_encode([
            'ok'=>gettype($res) == 'boolean',
            'value'=>$res
        ]);
        break;
    case 'change_admin_password':
        //todo : make sure about this and its func 
        $res = $api->change_admin_password($_REQUEST['username'],$_REQUEST['old_password'],$_REQUEST['new_password']);
        print_r($res);
        $tmp = [
            'ok'=>gettype($res) == "boolean" || $res == "wrong_password",
            'value'=>'none'
        ];
        if($res == "wrong_password"){
            $tmp['value'] = "wrong_password";
        };
        if(gettype($res) == "boolean" && $res == true){
            $tmp['value'] = true;
        };
        echo json_encode($tmp);
        break;
    case 'get_admins':
        $res = $api->get_admins();
        echo json_encode([
            'ok'=> gettype($res) == "boolean",
            'value'=>$res
        ]);
        break;
    case 'new_support_message':
        $res = $api->new_support_message($_REQUEST['username'],$_REQUEST['subject'],$_REQUEST['content']);
        echo json_encode([
            'ok'=>gettype($res) == "boolean",
            'value'=>$res
        ]);
        break;
    default:
        break;
}

