arrow_left_white_svg = 
`
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
`
function go_to_admin_password_checker(username){
    window.location.replace('../adminPasswordChecker/index.php?username='+username)
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
