submit_data = function(){
    if(!confirm('آیا صحت اطلاعات را تایید می کنید؟')) return
    let data_object = {
        function_name : 'new_issue',
        username:document.getElementById('username').value,
        subject:document.getElementById('subject').value,
        content:document.getElementById('content').value
    } 
    let url="http://localhost:80/git/vahed-app/src/back-end/actions.php";
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data_object)
    }).then(res=>res.text())
    .then(function(response){
        console.log(response)
        if(response == "true"){
            alert('با موفقیت انجام شد.')
            window.location.assign('#/support');
        }else{
            alert('مشکلی وجود داشت،دوباره امتحان کنید')
        }
    })

}
