const api_gateway_origin = "https://localhost/mouj/api/test.php"

function fetch_pro({url,data}){
    //args: @data:object @url:string @returnValue:promise(fetch promise)
    let query = "";
    let counter = 0;
    for(prop in data){
        query+= `${prop}=${data[prop]}&`;
        counter +=1
    }
    if(counter!=0){
        query = query.split('')
        query.pop()
        query = query.join('')

    }
    return fetch(`${url}?`+query)
    //return `${url}?`+query
}
fetch_pro({
    url:api_gateway_origin,
    data:{}
})
.then(result=>result.text())
.then(result => {
    alert(result)
})