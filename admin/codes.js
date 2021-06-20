delete_svg = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>

    `;
finish_svg = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-ui-checks" viewBox="0 0 16 16">
    <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
</svg>
`;
person_plus_white_svg = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-person-plus" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>
`
box_arrow_up_left_white =
`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-box-arrow-up-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"/>
  <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"/>
</svg>
`
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
    if(url.includes('#admins')){
        console.log('admins')
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