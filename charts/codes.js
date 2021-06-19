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
        items.push('شروع: '+res.start_date)
        if(res.end_date==null){
            items.push('وضعیت: خاتمه نیافته')
        }
        items.push('مبلغ کلی: '+res.final_amount_as_rial);
        items.push('مبلغ جمع شده فعلی: '+res.current_amount);

        items.forEach(item=>{
            tmp = document.createElement('div');
            tmp.innerHTML = item
            els.items.appendChild(tmp)
        })
        els.title.innerHTML = res.title;
        els.progressLabel.innerHTML = res.current_amount +' از '+res.final_amount_as_rial;
        els.progressbar.style.width = ((res.current_amount/res.final_amount_as_rial)*100)+"%";
        
    });
    fetch('../api/requests.php?func_name=get_plan_ids')
    .then(res=>res.json())
    .then(res=>{
        res.forEach(plan_id=>{
            fetch('../api/requests.php?func_name=get_plan_transactions&plan_id='+plan_id)
            .then(r=>r.json())
            .then(r=>{
                title = "موج شماره: "+plan_id
                items = []
                r.forEach(i=>{
                    items.push({
                        title:'پرداخت شده توسط: '+i.username,
                        content:'مبلغ: '+i.amount+' ریال'+' / '+'دسته مقصد: '+(i.category == "mouj"? 'طرح موج':'گروه آنسه الشهدا')
                    })
                })
                document.getElementById('timelineBoxesContainer').innerHTML+=componise.renderComponent({
                    title,
                    componentName:'timelineBox',
                    items
                })
            })
        })
    })
    
    
}
window.onload = function(){
    updateLastDoneWork()
}