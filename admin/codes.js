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
        document.querySelector('#load_support_messages_button').click()
    })
}
api_operations.new_plan = function(){
    starter_username = username;
    title= prompt('enter plan title')
    description = prompt('enter plan description')
    final_amount = prompt('enter final amount of plan as rial')
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
function render_settings(){
    dataContainer_els.title.innerHTML = "تنظیمات";
    dataContainer_els.info.innerHTML = "با استفاده از دسترسی مدیرتان، تنظیمات را تغییر دهید.";
    dataContainer_els.container.innerHTML = "";
    function change_password(username){
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
    renderPlan({
        title:"change my password",
        icons:[
            {
                svg:arrow_left_white_svg,
                handler:function(){
                    change_password(username)
                }
            }
        ],
        targetEl:dataContainer_els.container
    })
    
    renderPlan({
        title:"start new plan",
        icons:[
            {
                svg:arrow_left_white_svg,
                handler:function(){
                    api_operations.new_plan(username)
                }
            }
        ],
        targetEl:dataContainer_els.container
    })

}
function render_plans(){
    dataContainer_els.title.innerHTML = "تمام طرح ها";
    dataContainer_els.info.innerHTML = "تمام طرح هایی که تا به حال شروع شده را در پایین مشاهده می کنید.";
    dataContainer_els.container.innerHTML ="";
    fetch('../api/requests.php?func_name=get_plans')
    .then(res=>res.json())
    .then(r=>{
        if(r.length == 0){
            dataContainer_els.container.innerHTML = "<h1 class='empty bg-info'>nothing to show !</h1>";
            return;
        }
        r.forEach(plan=>{
            renderPlan({
                title:plan.title,
                icons:[
                    {
                        svg:delete_svg,
                        handler:function(){
                            api_operations.delete_handler(plan.id)
                        }
                    },
                    {
                        svg:finish_svg,
                        handler:function(){
                            api_operations.finish_handler(plan.id)
                        }
                    }
                ],
                targetEl:dataContainer_els.container
            })
        })
        
    })
}
function render_transactions(){
    dataContainer_els.title.innerHTML = "تمام تراکنش ها";
    dataContainer_els.info.innerHTML = "در قسمت پایین آمار دقیق تراکنش ها را مشاهده می کنید";
    dataContainer_els.container.innerHTML ="";
    fetch('../api/requests.php?func_name=get_transactions')
    .then(res=>res.json())
    .then(r=>{
        if(r.length == 0){
            dataContainer_els.container.innerHTML = "<h1 class='empty bg-info'>nothing to show !</h1>";
            return;
        }
        r.forEach(tr=>{
            renderPlan({
                title:tr.username,
                icons:[
                    {
                        svg:delete_svg,
                        handler:function(){
                            api_operations.delete_transaction(tr.id)
                        }
                    }
                ],
                targetEl:dataContainer_els.container
            })
        })
        
    })
}
function render_users(){
    dataContainer_els.title.innerHTML = "تمام کاربران";
    dataContainer_els.info.innerHTML = "در قسمت پایین تمام کاربران را مشاهده می کنید - مدیران از کاربران عادی متمایز شده اند";
    dataContainer_els.container.innerHTML ="";
    fetch('../api/requests.php?func_name=get_all_users')
    .then(res=>res.json())
    .then(r=>{
        if(r.length == 0){
            dataContainer_els.container.innerHTML = "<h1 class='empty bg-info'>nothing to show !</h1>";
            return;
        }
        r.forEach(user=>{
            renderPlan({
                title:user.username+(user.is_admin?"(ادمین)":""),
                icons:[
                    {
                        svg:delete_svg,
                        handler:function(){
                            api_operations.delete_user(user.username)
                        }
                    },
                    {
                        svg:person_plus_white_svg,
                        handler:function(){
                            api_operations.make_user_admin(user.username)
                        }
                    }
                ],
                targetEl:dataContainer_els.container
            })
        })
        
    })
}
function render_support_messages(){
    dataContainer_els.title.innerHTML = "تمام درخواست های پشتیبانی";
    dataContainer_els.info.innerHTML = "با توجه به اولویت ها به درخواست های پشتیبانی رسیدگی کنید";
    dataContainer_els.container.innerHTML ="";
    fetch('../api/requests.php?func_name=get_support_messages')
    .then(res=>res.json())
    .then(r=>{
        if(r.length == 0){
            dataContainer_els.container.innerHTML = "<h1 class='empty bg-info'>nothing to show !</h1>";
            return;
        }
        r.forEach(sm=>{
            renderPlan({
                title:sm.subject,
                icons:[
                    {
                        svg:delete_svg,
                        handler:function(){
                            api_operations.delete_support_message(sm.id)
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
var dataContainer_els ={}
window.onload = function(){
    dataContainer_els = {
        title:q('dataContainer-title'),
        info:q('dataContainer-info'),
        container:q('dataContainer')
    }
    function just_active_this(el){
        document.querySelectorAll('.horizontalItems .item').forEach(item=>{
            item.classList.remove('active');
        })
        el.classList.add('active');
    }
    q("load_plans_button").onclick = function(){
        just_active_this(this)
        render_plans()
    }
    
    q("load_transactions_button").onclick = function(){
        just_active_this(this)
        render_transactions()
    }
    q("load_users_button").onclick = function(){
        just_active_this(this)
        render_users()
    }
    q("load_support_messages_button").onclick = function(){
        just_active_this(this)
        render_support_messages()
    }
    q("load_settings_button").onclick = function(){
        just_active_this(this)
        render_settings()
    }

    q('load_plans_button').click()
    q("username").textContent = username;
    q("info").textContent = "اطلاعات بیشتری درباره این کاربر موجود نیست ";

    
}