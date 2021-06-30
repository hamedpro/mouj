window.onload = function(){
    fetch('../api/requests.php?func_name=get_plans')
    .then(res=>res.json())
    .then(r=>{
        r = r.reverse()
        r.forEach(plan=>{
            
            content = ""
            content +=  lightbulb_white +"آیدی طرح: "+plan.id +"<br>"
            content += lightbulb_white +"تاریخ شروع طرح: " +plan.start_date+"<br>"
            content += lightbulb_white +"تاریخ اتمام طرح: " +plan.end_date+"<br>"
            content += lightbulb_white +"مبلغ کلی مورد نیاز: " +plan.final_amount_as_rial+"<br>"
            content += lightbulb_white +"مبلغ جمع شده فعلی: " +plan.current_amount+"<br>"
            content += lightbulb_white +"توضیحات ثبت شده: " +plan.description+"<br>"
            renderPlan({
                bottom_button_text:"انتخاب طرح",
                bottom_button_handler:function(){
                    if(plan.status == "finished"){
                        alert('این طرح به پایان رسیده است و امکان شرکت در آن وجود ندارد')
                        return
                    }
                    localStorage.setItem('plan_id_to_donate',plan.id)
                    window.location.replace('../newTransaction')
                },
                title:"نام طرح: "+plan.title,
                content:content,
                container_click_handler:function(){
                    
                },
                icons:[
                    
                ],
                targetEl:document.getElementById('data_container')
            })
        })
    })
}
