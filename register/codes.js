submit = function(){
    let user_confirm = confirm('صحت اطلاعات را تایید می کنید ؟');
    if(!user_confirm) return false; 
    
    let data_object = {
        function_name:'add_new_user',
        username:document.getElementById('username_input').value
    }
    let url = "http://localhost:80/git/vahed-app/src/back-end/actions.php";
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data_object)
    }).then(res=>res.json()).then(data=>{
        if(data == true){
            alert('با موفقیت انجام شد')
        }else{
            alert('مشکلی به وجود آمد،دوباره امتحان کنید')
        }
    })
}

updated = function(){
    document.getElementById('username_input').addEventListener('input',function(){
            console.log('test')
            let url = "http://localhost:80/git/vahed-app/src/back-end/actions.php" ;
            fetch(url,{
                method:"POST",
                body:JSON.stringify({
                    function_name:'is_username_avaiable',
                    username:document.getElementById('username_input').value
                })
            }).then(res=>{
                console.log(res)
                this.username_is_taken = JSON.parse(res) ? false : true
            })
        })
}