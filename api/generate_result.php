<?php
class result {
    public $error_code = NULL;
    public $error_message = NULL;
    public $has_error = NULL;
    public $value = NULL;
    public function set_error($error_code,$error_message){
        $this->has_error = true;
        $this->error_code = $error_code;
        $this->error_message = $error_message;
    }
    public function make_json(){
        $tmp = [
            'value'=>$this->value,
            'error_code'=>$this->error_code,
            'error_message'=>$this->error_message,
            'has_error'=>$this->has_error
        ];
        return json_encode($tmp);
    }
    public function save_result_in_database(){
        //todo
    }
    public function __destruct(){
        $this->save_result_in_database();
    }
}
/* $r = new result;
echo $r->make_json();
echo "<br>";
$r->set_error(0,"there was not any db called hamed ");
echo $r->make_json(); */
