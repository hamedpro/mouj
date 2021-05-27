submit_data = function(){
    if(!confirm('آیا صحت اطلاعات را تایید می کنید؟')) return
    var username=document.getElementById('username').value;
    var subject=document.getElementById('subject').value;
    var content=document.getElementById('content').value;
    api.localStorage.newSupportMessage(username,subject,content,false)
    alert('با موفقیت انجام شد.')
    window.location.replace('../index.html')
    /* let url="http://localhost:80/git/vahed-app/src/back-end/actions.php";
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
    }) */

}
window.onload = function(){
    document.getElementById('submit_data').onclick=submit_data
}
