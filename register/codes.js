submit = function(){
    let user_confirm = confirm('صحت اطلاعات را تایید می کنید ؟');
    if(!user_confirm) return false; 
    var username = document.getElementById('username_input').value;
    fetch('../api/requests.php?func_name=new_user&username='+username)
    .then(function(){
        alert('با موفقیت انجام شد');
    })
    
}
window.onload = function(){
    document.getElementById('username_input').addEventListener('input',function(){
        var username = document.getElementById('username_input').value;
        fetch('../api/requests.php?func_name=is_username_available&username='+username,)
        .then(res=>res.text())
        .then(res=>{
            console.log(res)
            if(res != 'true'){
                document.getElementById('tips_container_1').style.display = "block";
                document.getElementById('submit_button').classList.add('disabled');
            }else{
                document.getElementById('tips_container_1').style.display = "none";
                document.getElementById('submit_button').classList.remove('disabled');
            }
        })
    })
    document.getElementById('submit_button').onclick = submit;
}

