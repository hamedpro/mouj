submit_data = function(){
    if(!confirm('آیا صحت اطلاعات را تایید می کنید؟')) return
    var username=document.getElementById('username').value;
    var subject=document.getElementById('subject').value;
    var content=document.getElementById('content').value;

    fetch('../api/requests.php?func_name=new_support_message&subject='+subject+'&content='+content+'&username='+username)
    .then(res=>res.text())
    .then(res=>{
        console.log(res)
        if(res == "true"){
            alert('با موفقیت انجام شد');
        }
    })

}
window.onload = function(){
    document.getElementById('submit_data').onclick = submit_data
}
