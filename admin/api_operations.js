let api_operations = {}
api_operations.delete_transaction = function(tr_id){
    if(!confirm('are you sure?')) return;
    url = '../api/requests.php?func_name=delete_transaction&transaction_id='+tr_id;
        
        fetch(url)
        .then(res=>res.text())
        .then(res=>{
            if(res == "true"){
                alert('done')
            }else{
                alert('seems there is an error, please try again');
            }
            document.querySelector('#load_transactions_button').click()
    })
}
api_operations.delete_user = function(username){
    if(!confirm('are you sure?')) return;

    fetch('../api/requests.php?'+object_to_query({
        func_name:'delete_user',
        username
    }))
    .then(res=>res.text())
    .then(res=>{
        
        if(res == "true"){
            alert('done')
        }else{
            alert('seems there is an error, please try again');
        }
        select('load_users_button').click()
    })
}

api_operations.delete_handler = function(plan_id){
    if(!confirm('are you sure?')) return;
    fetch('../api/requests.php'+object_to_query({
        func_name:'delete_plan',
        plan_id
    }))
    .then(res=>res.text())
    .then(res=>{
        
        if(res == "true"){
            alert('done')
        }else{
            alert('seems there is an error, please try again');
        }
        select('load_plans_button').click()
    })
}
api_operations.finish_handler = function(plan_id){
    if(!confirm('are you sure?')) return;
    
    fetch('../api/requests.php'+object_to_query({
        func_name:'finish_plan',
        plan_id
    }))
    .then(res=>res.text())
    .then(res=>{
        if(res == "true"){
            alert('done')
        }else{
            alert('seems there is an error, please try again');
        }
        select('load_plans_button').click()
    })
}
api_operations.make_user_admin = function(username){
    if(!confirm('are you sure?')) return;
    
    fetch('../api/requests.php'+object_to_query({
        func_name:'make_user_admin',
        username:username,
        password:prompt('enter his password as a 4 digit number')
    }))
    .then(res=>res.text())
    .then(res=>{
        if(res == "true"){
            alert('done')
        }else{
            alert('seems there is an error, please try again');
        }
        select('load_users_button').click()
    })
}
api_operations.delete_support_message =function (sm_id){
    if(!confirm('are you sure?')) return;

    fetch('../api/requests.php'+object_to_query({
        func_name:'delete_support_message',
        support_message_id:sm_id
    }))
    .then(res=>res.text())
    .then(res=>{
        if(res == "true"){
            alert('done')
        }else{
            alert('seems there is an error, please try again');
        }
        select('load_support_messages_button').click()
    })
}
api_operations.new_plan = function(){
    starter_username = username;
    title= prompt('enter plan title')
    description = prompt('enter plan description')
    final_amount = prompt('enter final amount of plan as rial')

    if(title == null || description == null || final_amount == null ||
        title == "" || description == "" || final_amount == ""){
        alert('inputs were not valid')
        return
    }

    fetch(`../api/requests.php`+object_to_query({
        starter_username,
        description,
        final_amount,
        title,
        func_name:'new_plan'
    }))
    .then(res=>res.text())
    .then(r=>{
        if(r == "true"){
            alert('done')
        }else{
            alert('there was an error, please try again')
        }
    })
}
api_operations.change_password= function (username){
    old_password = prompt('enter your old password as a 4 digit number')
    new_password = prompt('enter your new password')
    fetch(`../api/requests.php`+object_to_query({
        func_name:'change_admin_password',
        username,
        old_password,
        new_password
    }))
    .then(res=>res.text())
    .then(r=>{
        if(r == "true"){
            alert('done')
        }else{
            alert("there was an error")
        }
    })
}
api_operations.delete_support_messages = function(){
    if (!confirm('are you sure ?')) return
    fetch('../api/requests.php'+object_to_query({
        func_name:'delete_all_support_messages'
    }))
    .then(res=>res.text())
    .then(r=>{
        if(r== "true"){
            alert('done')
        }else{
            alert('failed')
        }
    })
}
api_operations.delete_all_transactions = function(){
    if (!confirm('are you sure?')) return 
    fetch('../api/requests.php'+object_to_query({
        func_name:'delete_all_transactions'
    }))
    .then(res=>res.text())
    .then(r=>{
        if(r == "true"){
            alert('done')
        }else{
            alert('failed')
        }
    })
}
api_operations.new_admin = function (){
    username=prompt('enter his/her username')
    password = Number(prompt('enter his password as a 4 digit number'))
    fetch('../api/requests.php'+object_to_query({
        func_name:'make_user_admin',
        username,
        password
    }))
    .then(res=>res.text())
    .then(r=>{
        if(r=="true"){
            alert('done')
        }else{
            alert('failed')
        }
    })
}