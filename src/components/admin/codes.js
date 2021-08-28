function render_settings(mode){
    els.title.innerHTML = "تنظیمات";
    els.info.innerHTML = "با استفاده از دسترسی مدیرتان، تنظیمات را تغییر دهید.";
    els.container.innerHTML = "";
    
    renderSettingOption("تعویض رمز عبور",function(){
        api_operations.change_password(localStorage.getItem('username'))
    })
    renderSettingOption("شروع یک طرح جدید",function(){
        api_operations.new_plan(username)
    })
    renderSettingOption("حذف تمام تراکنش ها",api_operations.delete_all_transactions)
    renderSettingOption("اضافه کردن ادمین جدید",api_operations.new_admin)
    renderSettingOption("حذف تمام درخواست های پشتیبانی",api_operations.delete_support_messages)
    renderSettingOption("خروج از حساب کاربری",function(){
        if (!confirm('are you sure?')) return
        localStorage.removeItem('username')
        window.location.replace('../home')
    })
    renderSettingOption("حذف تمام طرح ها",function(){
        if (!confirm('are you sure?')) return
        fetch('../api/requests.php'+object_to_query({
            func_name:'delete_all_plans'
        }))
        .then(r=>r.text())
        .then(r=>{
            if(r=="true"){
                alert('done successfuly')
            }else{
                alert('failed')
            }
        })
    })
    delete_all_users_handler = function(){
        if (!confirm('are you sure?')) return
        fetch('../api/requests.php'+object_to_query({
            func_name:'delete_all_users'
        }))
        .then(r=>r.text())
        .then(r=>{
            if(r == "true"){
                alert('done')
            }else{
                alert('failed')
            }
        })
    }
    renderSettingOption("حذف تمام کاربران",delete_all_users_handler)

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
        r.reverse().forEach(plan=>{
            if(mode == "open_plans" && plan.status == "finished") return 
            if(mode == "closed_plans" && plan.status == "open") return
            
            content = ""
            content += "کل مبلغ مورد نیاز: " +plan.final_amount_as_rial +" ریال" +"<br>"
            content += "وضعیت: "+(plan.status == "finished"?"خاتمه یافته":"خاتمه نیافته") +"<br>"
            content += "تاریخ شروع: "+plan.start_date +"<br>"
            content += "مبلغ جمع شده فعلی :"+plan.current_amount+" ریال" +"<br>"
            content += "شروع کننده طرح: "+plan.starter_username+"<br>"
            subject = "نام طرح: "+(plan.title)
            renderPlanOption(subject,content,plan.id)
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
        r.reverse().forEach(tr=>{
            content = ""
            content += "مبلغ تراکنش: " +tr.amount +" ریال" +"<br>"
            content += "مقصد تراکنش: " +(tr.category == "mouj"?"طرح موج":"موسسه آنسه الشهدا")+"<br>"
            content += "شماره طرح مقصد این تراکنش: " +tr.plan_id +"<br>"
            
            renderTr("تراکنش توسط: "+tr.username,content,tr.id)
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
        r.reverse().forEach(user=>{
            if(mode == "admins"){
                if(!user.is_admin) return 
            }
            if(mode == "normal_users"){
                if(user.is_admin) return 
            }
            content = ""
            if(user.is_admin){
                content += "این فرد دارای اختیارات مدیر است"+"<br>"
            }
            
            renderUser(user.username,content,user.is_admin)
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
        
        r.reverse().forEach(sm=>{
            if(mode == "just_open_support_messages" && sm.status == "closed") return
            if(mode == "just_closed_support_messages" && sm.status == "open") return 
            subject = "موضوع: "+sm.subject
            content = "ثبت شده توسط: "+sm.username+"<br>";

            renderSM(subject,content,sm.id)
        })
        
    })
}

var els ={}
window.onload = function(){
    select("username").textContent = username;
    select("info").textContent = "اطلاعات بیشتری درباره این کاربر موجود نیست ";

    els = {
        title:select('dataContainer-title'),
        info:select('dataContainer-info'),
        container:select('dataContainer')
    }
    function just_active_this(el){
        document.querySelectorAll('.horizontalItems .item').forEach(item=>{
            item.classList.remove('active');
        })
        el.classList.add('active');
    }
    select("load_plans_button").onclick = function(){
        just_active_this(this)
        render_plans()
        select('filter').innerHTML = ""
        select('filter').innerHTML = 
        `
        <option value="any">any</option>
        <option value="finished_plans">finished plans</option>
        <option value="open_plans">open plans</option>
        `
                
        select('filter').onchange = function(){  
            render_plans(select('filter').value) 
        }
    }
    
    select("load_transactions_button").onclick = function(){
        just_active_this(this)
        render_transactions()
        select('filter').innerHTML = 
        `
        <option value="any">any</option>
        
        `
                
        select('filter').onchange = function(){  
            render_transactions(select('filter').value) 
        }
        
    }
    select("load_users_button").onclick = function(){
        just_active_this(this)
        render_users()
        select('filter').innerHTML = 
        `
        <option value="any">any</option>
        <option value="normal_users">normal users</option>
        <option value="admins">admins</option>
        `
                
        select('filter').onchange = function(){  
            render_users(select('filter').value) 
        }
    }
    select("load_support_messages_button").onclick = function(){
        just_active_this(this)
        render_support_messages(true)

        select('filter').innerHTML = 
        `
        <option value="any">any</option>
        <option value="just_open_support_messages">just open support messages</option>
        <option value="just_closed_support_messages">just closed support messages</option>
        `
                
        select('filter').onchange = function(){  
            render_support_messages(select('filter').value) 
        }
    }
    select("load_settings_button").onclick = function(){
        just_active_this(this)
        render_settings()
        select('filter').innerHTML = 
        `
        <option value="any">any</option>
        `
                
        select('filter').onchange = function(){  
            render_settings(select('filter').value) 
        }
    }

    select('load_plans_button').click()
    
}