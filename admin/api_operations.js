let api_operations = {}
api_operations.delete_transaction = function(tr_id){
    let user_confirm = confirm('are you sure?');
    if(!user_confirm) return;
    url = '../api/requests.php?func_name=delete_transaction&transaction_id='+tr_id;
        console.log(url)
        fetch(url)
        .then(res=>res.text())
        .then(res=>{
            console.log(res)
            if(res == "true"){
                alert('done')
            }else{
                alert('seems there is an error, please try again');
            }
            document.querySelector('#load_transactions_button').click()
    })
}
api_operations.delete_user = function(username){
    let user_confirm = confirm('are you sure?');
    if(!user_confirm) return;
    url = '../api/requests.php?func_name=delete_user&username='+username;
        console.log(url)
        fetch(url)
        .then(res=>res.text())
        .then(res=>{
            console.log(res)
            if(res == "true"){
                alert('done')
            }else{
                alert('seems there is an error, please try again');
            }
            document.querySelector('#load_users_button').click()
    })
}

api_operations.delete_handler = function(plan_id){
    let user_confirm = confirm('are you sure?');
        if(!user_confirm) return;
        url = '../api/requests.php?func_name=delete_plan&plan_id='+plan_id;
        console.log(url)
        fetch(url)
        .then(res=>res.text())
        .then(res=>{
            console.log(res)
            if(res == "true"){
                alert('done')
            }else{
                alert('seems there is an error, please try again');
            }
            document.querySelector('#load_plans_button').click()
    })
}
api_operations.finish_handler = function(plan_id){
    let user_confirm = confirm('are you sure?');
    if(!user_confirm) return;
    url = '../api/requests.php?func_name=finish_plan&plan_id='+plan_id;
    console.log(url)
    fetch(url)
    .then(res=>res.text())
    .then(res=>{
        console.log(res)
        if(res == "true"){
            alert('done')
        }else{
            alert('seems there is an error, please try again');
        }
        document.querySelector('#load_plans_button').click()
    })
}
api_operations.make_user_admin = function(username){
    let user_confirm = confirm('are you sure?');
    if(!user_confirm) return;
    url = '../api/requests.php?func_name=make_user_admin&username='+username;
    console.log(url)
    fetch(url)
    .then(res=>res.text())
    .then(res=>{
        console.log(res)
        if(res == "true"){
            alert('done')
        }else{
            alert('seems there is an error, please try again');
        }
        document.querySelector('#load_users_button').click()
    })
}
api_operations.delete_support_message =function (sm_id){
    let user_confirm = confirm('are you sure?');
    if(!user_confirm) return;
    url = '../api/requests.php?func_name=delete_support_message&support_message_id='+sm_id;
    console.log(url)
    fetch(url)
    .then(res=>res.text())
    .then(res=>{
        console.log(res)
        if(res == "true"){
            alert('done')
        }else{
            alert('seems there is an error, please try again');
        }
        document.q('load_support_messages_button').click()
    })
}
api_operations.new_plan = function(){
    starter_username = username;
    title= prompt('enter plan title')
    description = prompt('enter plan description')
    final_amount = prompt('enter final amount of plan as rial')
    if(title == null || description == null || final_amount == null){
        alert('try again')
        return
    }
    
    if(title == "" || description == "" || final_amount == ""){
        alert('dont let any field empty')
        return
    }
    obj = {
        starter_username,
        description,
        final_amount,
        title,
        func_name:'new_plan'
    }
    fetch(`../api/requests.php?func_name=new_plan&starter_username=${starter_username}&description=${description}&final_amount_as_rial=${final_amount}&title=${title}`)
    .then(res=>res.text())
    .then(r=>{
        console.log(r)
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
    fetch(`../api/requests.php?func_name=change_admin_password&username=${username}&old_password=${old_password}&new_password=${new_password}`)
    .then(res=>res.text())
    .then(r=>{
        if(r == "true"){
            alert('done')
        }else{
            alert("there was an error")
        }
    })
}