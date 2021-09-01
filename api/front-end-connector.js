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

module.exports = {
    fetch_pro
}