let actions_file_url = './back-end/actions.php';
function take_action(data_object){
    return new Promise((res,rej)=>{
        $.ajax({
            url:actions_file_url,
            data:data_object,
            success(data){
                console.log(data)
                res(data)
            },
            error:function(data){
                console.log(data)
                rej(data)
            }
        });
    })
};