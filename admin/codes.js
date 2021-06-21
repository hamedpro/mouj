
delete_transaction = function(tr_id){
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
delete_user = function(username){
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

delete_handler = function(plan_id){
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
finish_handler = function(plan_id){
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
make_user_admin = function(username){
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
function delete_support_message(sm_id){
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
        document.querySelector('#load_support_messages_button').click()
    })
}
function update_dataContainer(){
    var dataContainer_els = {
        title:document.getElementById('dataContainer-title'),
        info:document.getElementById('dataContainer-info'),
        container:document.getElementById('dataContainer')
    }
    var url = window.location.href;
    if(url.includes('#settings')){
        dataContainer_els.title.innerHTML = "settings";
        dataContainer_els.info.innerHTML = "change your settings, you are an admin!";
        dataContainer_els.container.innerHTML = "some html ";

    }
    if(url.includes('#plans')){
        dataContainer_els.title.innerHTML = "تمام طرح ها";
        dataContainer_els.info.innerHTML = "تمام طرح هایی که تا به حال شروع شده را در پایین مشاهده می کنید.";
        dataContainer_els.container.innerHTML ="";
        fetch('../api/requests.php?func_name=get_plans')
        .then(res=>res.json())
        .then(r=>{
            r.forEach(plan=>{
                renderPlan({
                    title:plan.title,
                    icons:[
                        {
                            svg:delete_svg,
                            handler:function(){
                                delete_handler(plan.id)
                            }
                        },
                        {
                            svg:finish_svg,
                            handler:function(){
                                finish_handler(plan.id)
                            }
                        }
                    ],
                    targetEl:dataContainer_els.container
                })
            })
            
        })
        
    }
    if(url.includes('#transactions')){
        dataContainer_els.title.innerHTML = "تمام تراکنش ها";
        dataContainer_els.info.innerHTML = "در قسمت پایین آمار دقیق تراکنش ها را مشاهده می کنید";
        dataContainer_els.container.innerHTML ="";
        fetch('../api/requests.php?func_name=get_transactions')
        .then(res=>res.json())
        .then(r=>{
            r.forEach(tr=>{
                renderPlan({
                    title:tr.username,
                    icons:[
                        {
                            svg:delete_svg,
                            handler:function(){
                                delete_transaction(tr.id)
                            }
                        }
                    ],
                    targetEl:dataContainer_els.container
                })
            })
            
        })
    }
    if(url.includes('#users')){
        dataContainer_els.title.innerHTML = "تمام کاربران";
        dataContainer_els.info.innerHTML = "در قسمت پایین تمام کاربران را مشاهده می کنید - مدیران از کاربران عادی متمایز شده اند";
        dataContainer_els.container.innerHTML ="";
        fetch('../api/requests.php?func_name=get_all_users')
        .then(res=>res.json())
        .then(r=>{
            r.forEach(user=>{
                renderPlan({
                    title:user.username+(user.is_admin?"(ادمین)":""),
                    icons:[
                        {
                            svg:delete_svg,
                            handler:function(){
                                delete_user(user.username)
                            }
                        },
                        {
                            svg:person_plus_white_svg,
                            handler:function(){
                                make_user_admin(user.username)
                            }
                        }
                    ],
                    targetEl:dataContainer_els.container
                })
            })
            
        })
    }
    if(url.includes('#support_messages')){
        dataContainer_els.title.innerHTML = "تمام درخواست های پشتیبانی";
        dataContainer_els.info.innerHTML = "با توجه به اولویت ها به درخواست های پشتیبانی رسیدگی کنید";
        dataContainer_els.container.innerHTML ="";
        fetch('../api/requests.php?func_name=get_support_messages')
        .then(res=>res.json())
        .then(r=>{
            r.forEach(sm=>{
                renderPlan({
                    title:sm.subject,
                    icons:[
                        {
                            svg:delete_svg,
                            handler:function(){
                                delete_support_message(sm.id)
                            }
                        },
                        {
                           
                            svg:box_arrow_up_left_white,
                            handler:function(){
                                window.location.replace('../supportMessageShower/index.php?sm_id='+sm.id)
                            }
                        }
                    ],
                    targetEl:dataContainer_els.container
                })
            })
            
        })
    }
 
    

}



window.onload = function(){
    document.querySelectorAll('.horizontalItems .item').forEach(el=>{
        el.onclick=function(){
            window.location.assign('#'+el.innerHTML);
            update_dataContainer()
            document.querySelectorAll('.horizontalItems .item').forEach(item=>{
                item.classList.remove('active');
            })
            el.classList.add('active');
        }
    })
    document.querySelector('#load_plans_button').click()
    
    
}