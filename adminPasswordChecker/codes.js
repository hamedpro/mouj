function bel_bel(el,tempColor){
    oldColor = el.style.background;
    el.style.background = tempColor;
    setTimeout(function(){
        el.style.background = oldColor
    },300)
}
window.onload = function(){
    password = []
    buttons = []
    for (let i = 0; i <= 9; i++) {
        buttons.push(document.getElementById("button_"+(i)))
    }
    buttons.forEach(button=>{
        button.onclick = function(){
            password.push(Number(this.innerHTML))
            bel_bel(button,"blue");
            if(password.length == 4){
                url = '../api/requests.php?func_name=verify_admin_password&username='+username+"&password="+password.join("");
                
                fetch(url)
                .then(s=>s.text())
                .then(s=>{
                    if(s == "true"){
                        localStorage.setItem('username',username)
                        window.location.replace('../admin/index.html');
                    }else{
                        alert('هویت شما تایید نشد، دوباره تلاش کنید.')
                    }
                })
                password = []
            }
        }

    })
    document.onkeypress = function(e){
        for(i = 0;i<10;i++){
            if(e.key == i.toString()){
                document.getElementById("button_"+(i)).click()
            }
        }
    }
}