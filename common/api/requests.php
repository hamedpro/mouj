<?php
include_once('phpApi.php');
if(!isset($_REQUEST['func_name'])){
    exit();
};
$api = new api($db);
$api->$_REQUEST['func_name']($_REQUEST);