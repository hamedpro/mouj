function reset_factory(){
    if(!confirm('are you sure ?')) return;
    fetch('url',{
        method:'POST',
        body:JSON.stringify({function_name:'delete_database'})
    }).then(function(response){
        if(response.json() == 'true'){
            alert('با موفقیت انجام شد')
        }else{
            alert('there was an error');
        }
    })
}