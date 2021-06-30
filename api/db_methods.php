<?php
class api{
    public $db;
    public function __construct($db){
        $this->db = $db;
    }
    public function delete_database(){
        $query = "drop database if exists mouj";
        if($this->db->query($query)) return true;
    }

    public function new_log($obj){
        $content = $obj['content'];
        $query = "insert into logs (content) values ('$content')";
        return $this->db->query($query);
    }
    public function get_logs(){
        return get_table_as_json($this->db,'logs');
    }
    
    public function new_transaction($obj){
        $username = $obj['username'];
        $amount = $obj['amount'];
        $info = $obj['info'];
        $category = $obj['category'];
        $plan_id = $obj['plan_id'];

        $query = "insert into transactions (category,amount,info,username,plan_id) values ('$category','$amount','$info','$username',$plan_id)";
        if($this->db->query($query)){
            //finish every plan if its amount condition is met
            $plans = json_decode($this->get_plans());
            foreach ($plans as $key => $value) {
                if($value->final_amount_as_rial<= $value->current_amount){
                    $plan_id = $value->id;
                    $this->finish_plan(['plan_id'=>$plan_id]);
                };
            };
                
            
            return "true";
        }else{
            return "false";
        }
    }
    public function get_transactions(){
        return get_table_as_json($this->db,'transactions');
    }
    public function delete_transaction($obj){
        $transaction_id = $obj['transaction_id'];
        $query = "delete from transactions where id = $transaction_id";
        return $this->db->query($query) ? "true":'false';
    }

    public function delete_all_transactions(){
        return drop_table($this->db,'transactions')?"true":"false";
    }
    public function new_user($obj){
        $username = $obj['username']; 
        $query = "insert into users (username) values ('$username')";
        return $this->db->query($query);
    }

    public function get_all_users(){
        return get_table_as_json($this->db,'users');
    }
    public function delete_all_users(){
        drop_table($this->db,'users');
    }
    public function delete_user($obj){
        $username = $obj['username'];
        $q = "delete from users where username='$username'";
        if($this->db->query($q)){
            return "true";
        }else{
            return "false";
        };
    }
    public function is_username_available($obj){
        $username = $obj['username'];
        $query = "select * from users where username = '$username'";
        $results = $this->db->query($query);
        if(mysqli_num_rows($results) == 0){
            return 'true';
        }else{
            return 'false';
        };
    }
    public function does_user_exist($obj){
        $username = $obj['username'];
        if($this->is_username_available(['username'=>$username]) == "true"){
            return "false";
        }else{
            return "true";
        }
    }
    public function make_user_admin($obj){
        $username = $obj['username'];
        $password = $obj['password'];
        if($this->does_user_exist(['username'=>$username]) != "true"){
            $this->new_user(['username'=>$username]);
        };
        $q = "update users set is_admin = 'true' where username='$username'";
        $this->db->query($q);
        $q = "update users set password = '$password' where username='$username'";
        return $this->db->query($q)?"true":"false";
    }
    public function change_admin_password($obj){
        $old_password = $obj['old_password'];
        $new_password = $obj['new_password'];
        $username = $obj['username'];
        if($this->verify_admin_password([
            'username'=>$username,
            'password'=>$old_password
        ]) != "true"){
            return "false";
        }
        $q = "update users set password = '$new_password' where username = '$username'";
        return $this->db->query($q)?"true":"false";
    }
    public function get_admins(){
        $users = json_decode($this->get_all_users());
        $admins = [];
        foreach ($users as $key => $value) {
            if(!is_null($value->is_admin) && $value->is_admin == true){
                $admins[] = $value;
            }
        }
        return json_encode($admins);
    }
    public function verify_admin_password($obj){
        $username = $obj['username'];
        $password = $obj['password'];
        $q = "select password from users where username = '$username'";
        $q_results = $this->db->query($q);
        $row = mysqli_fetch_assoc($q_results);
        return $row['password'] == $password?"true":"false";
    }

    public function new_support_message($obj){
        $username = $obj['username'];
        $subject = $obj['subject'];
        $content = $obj['content'];
        $query = "insert into support_messages (username,subject,content,status) values ('$username','$subject','$content','open')";
        if($this->db->query($query)){
            return 'true';
        }else{
            return 'false';
        }
    }
    public function toggle_support_message_status($obj){
        $support_message_id = $obj['support_message_id'];
        if($this->is_support_message_open(['support_message_id'=>$support_message_id])){
            $query = "update support_messages set status = 'closed' where id = $support_message_id";
            return $this->db->query($query)?'true':'false';
        }else{
            $query = "update support_messages set status = 'open' where id = $support_message_id";
            return $this->db->query($query)?'true':'false';
        }
    }
    public function is_support_message_open($obj){
        $support_message_id = $obj['support_message_id'];
        $query = "select status from support_messages where id = $support_message_id";
        if(mysqli_fetch_assoc($this->db->query($query))['status'] == 'open'){
            return true;
        }else{
            return false;
        };
    }
    
    public function delete_all_support_messages(){
        return drop_table($this->db,'support_messages')?"true":'false';
        
    }
    public function delete_support_message($obj){
        $support_message_id = $obj['support_message_id'];
        $q = "delete from support_messages where id = $support_message_id";
        return $this->db->query($q)?"true":'false';
    }
    public function get_support_messages(){
        return get_table_as_json($this->db,'support_messages');
    }
    public function get_support_message($obj){
        $support_messages = json_decode($this->get_support_messages());
        foreach ($support_messages as $key => $value) {
            if($value->id == $obj['id']){
                return json_encode($value);
            };
        };
    }
    public function new_plan($obj){
        $starter_username = $obj['starter_username'];
        $title = $obj['title'];
        $description = $obj['description'];
        $final_amount_as_rial = $obj['final_amount_as_rial'];

        $start_date = date("Y:M:D");
        $q = "insert into plans(title,description,starter_username,status,start_date,final_amount_as_rial) values ('$title','$description','$starter_username','open','$start_date',$final_amount_as_rial)";
        return $this->db->query($q) ? "true":"false";
        
    }
    public function finish_plan($obj){
        $plan_id = $obj['plan_id'];
        $q = "update plans set status = 'finished' where id=$plan_id";
        $this->db->query($q);

        $current_date = date('Y:M:D');
        $q = "update plans set end_date = '$current_date' where id=$plan_id";
        if($this->db->query($q)){
            return "true";
        };

    }
    public function get_plan_data($obj){
        $plan_id = $obj['plan_id'];
        $q = "select * from plans where id = $plan_id";
        $q_results = $this->db->query($q);
        $database_row = mysqli_fetch_assoc($q_results);
        $computed_data = [];
        //add computed props =>
        $plan_transactions = json_decode($this->get_plan_transactions([
            'plan_id' => $plan_id
        ]));
        $current_amount = 0;
        foreach ($plan_transactions as $key => $value) {
            $current_amount += $value->amount;
            
        }
        $computed_data["current_amount"] = $current_amount;
        $computed_data['amount_is_collected'] = $current_amount >= $database_row['final_amount_as_rial'];
        //end of adding computed props
        
        $final_results = [];
        foreach ($database_row as $key => $value) {
            $final_results[$key] = $value;
        }
        foreach ($computed_data as $key => $value) {
            $final_results[$key] = $value;
        }
        return json_encode($final_results);
    }
    public function update_plan(){
        
    }
    public function delete_all_plans(){
        drop_table($this->db,'plans');
    }
    public function delete_plan($obj){
        $plan_id = (int)$obj['plan_id'];
        $q = "delete from plans where id=$plan_id";
        if($this->db->query($q)){
            return "true";
        };
    }
    public function get_plan_transactions($obj){
        $plan_id = (int)$obj['plan_id'];
        $q = "select * from transactions where plan_id = $plan_id";
        $q_results = $this->db->query($q);
        $results = [];
        while($row = mysqli_fetch_assoc($q_results)){
            $results[] = $row;
        }
        return json_encode($results);
    }
    public function get_plan_ids(){
        $q = "select * from plans";
        $q_results = $this->db->query($q);
        $results = [];
        while($row = mysqli_fetch_assoc($q_results)){
            $results[] = $row['id'];
        }
        return json_encode($results);
    }
    public function get_plans(){
        $results = [];
        foreach (json_decode($this->get_plan_ids()) as $key => $value) {
            $results[] = json_decode($this->get_plan_data(["plan_id"=>$value]));
        };
        return json_encode($results);
    }
    public function get_last_plan_id(){
        return last_item(json_decode($this->get_plan_ids()));
    }
    public function get_last_plan_data(){
        $last_plan_id = $this->get_last_plan_id();
        return $this->get_plan_data([
            'plan_id'=>$last_plan_id
        ]);
    }
}