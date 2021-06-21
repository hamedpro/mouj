<?php
include_once('phpApi.php');
$api = new api($db);
if(!isset($_REQUEST['func_name'])){
    exit();
};
$func_name = $_REQUEST['func_name'];
echo $api->$func_name($_REQUEST);
