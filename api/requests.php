<?php
include_once('common.php');
include_once('db_class.php');
include_once('db_methods.php');
$db = new db();
$api = new api($db->conn);
if(!isset($_REQUEST['func_name'])){
    exit();
};
$func_name = $_REQUEST['func_name'];
echo $api->$func_name($_REQUEST);
