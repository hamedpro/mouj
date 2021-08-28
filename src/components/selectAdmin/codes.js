
function go_to_admin_password_checker(username){
    localStorage.setItem('username',username)
    window.location.replace('../adminPasswordChecker/index.html')
}
window.onload = function(){
    fetch('../api/requests.php?func_name=get_admins')
    .then(res=>res.json())
    .then(r=>{
        r.forEach(admin=>{
            renderPlan({
                title:admin.username,
                container_click_handler:function(){
                    go_to_admin_password_checker(admin.username)
                },
                icons:[
                    {
                        svg:arrow_left_white_svg,
                        handler:function(){
                            
                        }
                    }
                ],
                targetEl:document.getElementById('dataContainer')
            })
        })
    })
}
