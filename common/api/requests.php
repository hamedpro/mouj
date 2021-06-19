<?php
include_once('phpApi.php');
$api = new api($db);
if(!isset($_REQUEST['func_name'])){
    exit();
};
echo $api->$_REQUEST['func_name']($_REQUEST);
