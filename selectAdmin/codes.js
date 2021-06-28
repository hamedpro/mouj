
function go_to_admin_password_checker(username){
    localStorage.setItem('username',username)
    window.location.replace('../adminPasswordChecker/index.php')
}
window.onload = function(){
    fetch('../api/requests.php?func_name=get_admins')
    .then(res=>res.json())
    .then(r=>{
        r.forEach(admin=>{
            renderPlan({
                title:admin.username,
                icons:[
                    {
                        svg:arrow_left_white_svg,
                        handler:function(){
                            go_to_admin_password_checker(admin.username)
                        }
                    }
                ],
                targetEl:document.getElementById('dataContainer')
            })
        })
    })
}
