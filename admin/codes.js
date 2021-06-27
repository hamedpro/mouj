function render_settings(){
    els.title.innerHTML = "تنظیمات";
    els.info.innerHTML = "با استفاده از دسترسی مدیرتان، تنظیمات را تغییر دهید.";
    els.container.innerHTML = "";
    
    renderSettingOption("change my password",els.container,function(){
        api_operations.change_password(username)
    })
    handler_func = function(){
        api_operations.new_plan(username)
    }
    renderSettingOption("start new plan",els.container,handler_func)
    
}
function render_plans(){
    els.title.innerHTML = "تمام طرح ها";
    els.info.innerHTML = "تمام طرح هایی که تا به حال شروع شده را در پایین مشاهده می کنید.";
    els.container.innerHTML ="";
    fetch('../api/requests.php?func_name=get_plans')
    .then(res=>res.json())
    .then(r=>{
        if(r.length == 0){
            els.container.innerHTML = "<h1 class='empty bg-info'>nothing to show !</h1>";
            return;
        }
        r.forEach(plan=>{
            console.log(plan)
            generatedContentText = ""
            generatedContentText += "کل مبلغ مورد نیاز: " +plan.final_amount_as_rial +" ریال" +"<br>"
            generatedContentText += "وضعیت: "+(plan.status == "finished"?"خاتمه یافته":"خاتمه نیافته") +"<br>"
            generatedContentText += "تاریخ شروع: "+plan.start_date +"<br>"
            generatedContentText += "مبلغ جمع شده فعلی :"+plan.current_amount+" ریال" +"<br>"
            generatedContentText += "شروع کننده طرح: "+plan.starter_username+"<br>"
            renderPlanOption("نام طرح: "+(plan.title),generatedContentText,plan.id)
        })
        
    })
}
function render_transactions(){
    els.title.innerHTML = "تمام تراکنش ها";
    els.info.innerHTML = "در قسمت پایین آمار دقیق تراکنش ها را مشاهده می کنید";
    els.container.innerHTML ="";
    fetch('../api/requests.php?func_name=get_transactions')
    .then(res=>res.json())
    .then(r=>{
        if(r.length == 0){
            els.container.innerHTML = "<h1 class='empty bg-info'>nothing to show !</h1>";
            return;
        }
        r.forEach(tr=>{
            generatedContentText = ""
            generatedContentText += "مبلغ تراکنش: " +tr.amount +" ریال" +"<br>"
            generatedContentText += "مقصد تراکنش: " +(tr.category == "mouj"?"طرح موج":"موسسه آنسه الشهدا")+"<br>"
            generatedContentText += "شماره طرح مقصد این تراکنش: " +tr.plan_id +"<br>"
            
            renderTr("تراکنش توسط: "+tr.username,generatedContentText,tr.id)
        })
        
    })
}
function render_users(){
    els.title.innerHTML = "تمام کاربران";
    els.info.innerHTML = "در قسمت پایین تمام کاربران را مشاهده می کنید - مدیران از کاربران عادی متمایز شده اند";
    els.container.innerHTML ="";
    fetch('../api/requests.php?func_name=get_all_users')
    .then(res=>res.json())
    .then(r=>{
        if(r.length == 0){
            els.container.innerHTML = "<h1 class='empty bg-info'>nothing to show !</h1>";
            return;
        }
        r.forEach(user=>{
            generatedContentText = ""
            if(user.is_admin){
                generatedContentText += "این فرد دارای اختیارات مدیر است"+"<br>"
            }
            
            renderUser("نام کاربری: "+user.username,generatedContentText,user.is_admin)
        })
        
    })
}
function render_support_messages(){
    els.title.innerHTML = "تمام درخواست های پشتیبانی";
    els.info.innerHTML = "با توجه به اولویت ها به درخواست های پشتیبانی رسیدگی کنید";
    els.container.innerHTML ="";
    fetch('../api/requests.php?func_name=get_support_messages')
    .then(res=>res.json())
    .then(r=>{
        if(r.length == 0){
            els.container.innerHTML = "<h1 class='empty bg-info'>nothing to show !</h1>";
            return;
        }
        r.forEach(sm=>{
            console.log(sm)
            content = "ثبت شده توسط: "+sm.username+"<br>";

            renderSM("موضوع: "+sm.subject,content,sm.id)
        })
        
    })
}
var els ={}
window.onload = function(){
    els = {
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