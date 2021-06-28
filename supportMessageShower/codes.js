
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
        q('data_container').innerHTML = ""
        q('content_container').innerHTML = content
    })
    q('submit_button').onclick = function(){
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
        })
    }
    q('back_button').onclick = function(){
        window.location.replace('../admin')
    }
}