function update_dataContainer(){
    var dataContainer_els = {
        title:document.getElementById('dataContainer-title'),
        info:document.getElementById('dataContainer-info'),
        container:document.getElementById('dataContainer')
    }
    var url = window.location.href;
    if(url.includes('#settings')){
        dataContainer_els.title.innerHTML = "settings";
        dataContainer_els.info.innerHTML = "change your settings, you are an admin!";
        dataContainer_els.container.innerHTML = "some html ";

    }
    if(url.includes('#plans')){
        dataContainer_els.title.innerHTML = "تمام طرح ها";
        dataContainer_els.info.innerHTML = "تمام طرح هایی که تا به حال شروع شده را در پایین مشاهده می کنید.";
        dataContainer_els.container.innerHTML = renderPlan(1,'hamedpro');
        dataContainer_els.container.innerHTML += renderPlan(1,'hamedpro');
    }
    if(url.includes('#transactions')){
        console.log("trs")
    }
    if(url.includes('#users')){
        console.log('users')
    }
    if(url.includes('#admins')){
        console.log('admins')
    }
    

}
window.onload = function(){
    document.querySelectorAll('.horizontalItems .item').forEach(el=>{
        el.onclick=function(){
            window.location.assign('#'+el.innerHTML);
            update_dataContainer()
            document.querySelectorAll('.horizontalItems .item').forEach(item=>{
                item.classList.remove('active');
            })
            el.classList.add('active');
        }
    })
    document.querySelector('#load_plans_button').click()
    document.querySelectorAll('#dataContainer .plan .iconsContainer .icon.delete_plan').forEach(el=>{
        el.onclick=function(){
            let plan_id = Number((el.parentElement.parentElement.getAttribute('plan_id')));
            let user_confirm = confirm('are you sure?');
            if(!user_confirm) return;
            url = '../api/requests.php?func_name=delete_plan&plan_id='+plan_id;
            console.log(url)
            fetch(url)
            .then(res=>res.text())
            .then(res=>{
                console.log(res)
                if(res == "true"){
                    alert('done')
                }else{
                    alert('seems there is an error, please try again');
                }
            })
        }
    })
    
    document.querySelectorAll('#dataContainer .plan .iconsContainer .icon.finish_plan').forEach(el=>{
        el.onclick=function(){
            let plan_id = Number((el.parentElement.parentElement.getAttribute('plan_id')));
            let user_confirm = confirm('are you sure?');
            if(!user_confirm) return;
            url = '../api/requests.php?func_name=finish_plan&plan_id='+plan_id;
            console.log(url)
            fetch(url)
            .then(res=>res.text())
            .then(res=>{
                console.log(res)
                if(res == "true"){
                    alert('done')
                }else{
                    alert('seems there is an error, please try again');
                }
            })
        }
    })
    
}