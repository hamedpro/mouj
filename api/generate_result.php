<?php
function generate_result($done_status_bool,$content){
    //$content here means error message or resuls =>
    if($done_status_bool){
        return [
            "done"=>true,
            "value"=>$content,
            "error_message"=>"empty"
        ];
    }else{
        return [
            "done"=>false,
            "value"=>"empty",
            "error_message"=>$content
        ];
    };

}
