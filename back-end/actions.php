<?php
include("functions.php");

//take action to requests =>
function take_action(){
    if(count($_REQUEST) == 0 ){
        return false;
    };
    $_REQUEST['function_name']();
};

take_action();