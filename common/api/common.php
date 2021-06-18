<?php
function get_table_as_json($db_instance,$table_name){
    $query = "select * from $table_name";
    $tmp = [];
    $results = $db_instance->query($query);
    while($row = mysqli_fetch_assoc($results)){
        $tmp[] = $row;
    };
    return json_encode($tmp);
};
function drop_table($db_instance,$table_name){
    $q = "drop table if exists $table_name";
    $db_instance->query($q);
};