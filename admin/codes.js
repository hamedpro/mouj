function render_settings(mode){
    els.title.innerHTML = "تنظیمات";
    els.info.innerHTML = "با استفاده از دسترسی مدیرتان، تنظیمات را تغییر دهید.";
    els.container.innerHTML = "";
    
    renderSettingOption("تعویض رمز عبور",els.container,function(){
        api_operations.change_password(localStorage.getItem('username'))
    })
    handler_func = function(){
        api_operations.new_plan(username)
    }
    renderSettingOption("شروع یک طرح جدید",els.container,handler_func)
    renderSettingOption("حذف تمام تراکنش ها",els.container,api_operations.delete_all_transactions)
    renderSettingOption("اضافه کردن ادمین جدید",els.container,api_operations.new_admin)
    renderSettingOption("حذف تمام درخواست های پشتیبانی",els.container,api_operations.delete_support_messages)
    renderSettingOption("خروج از حساب کاربری",els.container,function(){
        user_confirm = confirm('are you sure?')
        if (!user_confirm) return
        localStorage.removeItem('username')
        window.location.replace('../home')
    })
    
}
function render_plans(mode){
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
        r = r.reverse()
        r.forEach(plan=>{
            if(mode == "open_plans"){
                if(plan.status == "finished") return
            }
            if(mode == "closed_plans"){
                if(plan.status == "open") return
            }
            
            
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
        r=r.reverse()
        r.forEach(tr=>{
            generatedContentText = ""
            generatedContentText += "مبلغ تراکنش: " +tr.amount +" ریال" +"<br>"
            generatedContentText += "مقصد تراکنش: " +(tr.category == "mouj"?"طرح موج":"موسسه آنسه الشهدا")+"<br>"
            generatedContentText += "شماره طرح مقصد این تراکنش: " +tr.plan_id +"<br>"
            
            renderTr("تراکنش توسط: "+tr.username,generatedContentText,tr.id)
        })
        
    })
}
function render_users(mode){
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
        r=r.reverse()
        r.forEach(user=>{
            if(mode == "admins"){
                if(!user.is_admin) return 
            }
            if(mode == "normal_users"){
                if(user.is_admin) return 
            }
            generatedContentText = ""
            if(user.is_admin){
                generatedContentText += "این فرد دارای اختیارات مدیر است"+"<br>"
            }
            
            renderUser(user.username,generatedContentText,user.is_admin)
        })
        
    })
}
function render_support_messages(mode){
    /* correct values for mode arg :
    just_open_support_messages
    just_closed_support_messages */
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
        r=r.reverse()
        r.forEach(sm=>{
            if(mode == "just_open_support_messages"){
                if(sm.status == "closed") return 
            }
            if(mode == "just_closed_support_messages"){
                if(sm.status == "open") return 
            }
            
        
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
        q('filter').innerHTML = ""
        q('filter').innerHTML = 
        `
        <option value="any">any</option>
        <option value="finished_plans">finished plans</option>
        <option value="open_plans">open plans</option>
        `
                
        q('filter').onchange = function(){  
            render_plans(q('filter').value) 
        }
    }
    
    q("load_transactions_button").onclick = function(){
        just_active_this(this)
        render_transactions()
        q('filter').innerHTML = 
        `
        <option value="any">any</option>
        
        `
                
        q('filter').onchange = function(){  
            render_transactions(q('filter').value) 
        }
        
    }
    q("load_users_button").onclick = function(){
        just_active_this(this)
        render_users()
        q('filter').innerHTML = 
        `
        <option value="any">any</option>
        <option value="normal_users">normal users</option>
        <option value="admins">admins</option>
        `
                
        q('filter').onchange = function(){  
            render_users(q('filter').value) 
        }
    }
    q("load_support_messages_button").onclick = function(){
        just_active_this(this)
        render_support_messages(true)

        q('filter').innerHTML = 
        `
        <option value="any">any</option>
        <option value="just_open_support_messages">just open support messages</option>
        <option value="just_closed_support_messages">just closed support messages</option>
        `
                
        q('filter').onchange = function(){  
            render_support_messages(q('filter').value) 
        }
    }
    q("load_settings_button").onclick = function(){
        just_active_this(this)
        render_settings()
        q('filter').innerHTML = 
        `
        <option value="any">any</option>
        `
                
        q('filter').onchange = function(){  
            render_settings(q('filter').value) 
        }
    }
    
    q('load_plans_button').click()
    q("username").textContent = username;
    q("info").textContent = "اطلاعات بیشتری درباره این کاربر موجود نیست ";
    
    
}