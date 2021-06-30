function injectNewItem(content){
    item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = content
    select('data_container').appendChild(item)
}
window.onload = function(){
    support_message_id = Number(localStorage.getItem('support_message_id'))
    fetch('../api/requests.php'+object_to_query({
        func_name:"get_support_message",
        id:support_message_id
    }))
    .then(res=>res.json())
    .then(r=>{ 
        username = r.username
        status = r.status
        content = r.content
        subject = r.subject
      
       injectNewItem(person_check_fill_white+"نام کاربری: "+username)
       injectNewItem(envelope_white+"کد این گزارش: "+r.id)
       injectNewItem(clipboard_check_white +"وضعیت رسیدگی: "+ (status == "open"?"به گزارش رسیدگی نشده است":"گزارش رسیدگی شده است"))
       injectNewItem(lightbulb_white +"موضوع گزارش: "+ subject)
        select('content_container').innerHTML = content
        select('submit_button').innerHTML = status == "open"?"تغییر وضعیت به رسیدگی شده":"تغییر وضعیت گزارش به رسیدگی نشده"
    })
    
    select('submit_button').onclick = function(){
        if(!confirm('آیا اطمینان دارید؟')) return 
        fetch('../api/requests.php'+object_to_query({
            func_name:"toggle_support_message_status",
            support_message_id
        }))
        .then(res=>res.text())
        .then(r=>{
            if(r == "true"){
                alert('done')
            }else{
                alert('failed')
            }
            window.location.reload()
        })
    }
    select('back_button').onclick = function(){
        window.location.replace('../admin')
    }
}