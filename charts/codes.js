var updateLastDoneWork = function(){
    var els = {
        title:document.getElementById('title'),
        progressLabel:document.getElementById('progressLabel'),
        progressbar:document.getElementById('progressbar'),
        items:document.getElementById('items')
    }
    fetch('../api/requests.php?func_name=get_last_plan_data')
    .then(res=> res.json())
    .then(res=>{
        var items = [];
        items.push('hamed')
        items.forEach(item=>{
            tmp = document.createElement('div');
            tmp.innerHTML = item
            els.items.appendChild(tmp)
        })
        els.title.innerHTML = res.title;
        els.progressLabel.innerHTML = res.current_amount +' از '+res.final_amount_as_rial;
        els.progressbar.style.width = ((res.current_amount/res.final_amount_as_rial)*100)+"%";
        
    });
    
    
}
window.onload = function(){
    updateLastDoneWork()
}