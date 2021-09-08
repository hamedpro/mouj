<?php
class json_response_manager {
    public $output = ["errors"=>[],"data"=>NULL];
    public function new_error($error_code,$error_message){
        if(!isset($this->output["errors"])){
            $this->output['errors'] = [];
        };
        $this->output['errors'][] = [
            "code"=>$error_code,
            "message"=>$error_message
        ];
    }
    public function set_data($data){
        $this->output['data'] = $data;
    }
    public function response_and_exit(){
        $this->output['ok'] = count($this->output['errors']) == 0;
        echo json_encode($this->output);
        exit();
    }
}


// usage is like this =>

/* $rm = new json_response_manager;
$rm->new_error(2,"hamed is not here");
$rm->set_data([1,2,23]);
$rm->new_error(3,"hamed is not here");

$rm->response_and_exit(); */