export var custom_ajax_default_path = "http://localhost/mouj/api/requests.php";
export async function custom_ajax({url =custom_ajax_default_path,params={}}){ 
    if(Object.keys(params).length != 0){
        url+= "?";
        for(var prop in params){
            url+= prop+"="+params[prop]+"&"
        }
        url = url.split('')
        url.pop()
        url = url.join('')
    }
    var fetch_response = window.fetch(url)
    //todo check if error in fetch_response, throw that
    console.log('fetch detected : '+url)
    var parsed_json = null;
    try{
        parsed_json = await fetch_response.then(res=>res.json())
    }catch(e){
        throw 'invalid_json'
    }
    
    //check if error field in json is not empty
    if(parsed_json.errors.length != 0){
        throw "errors_field_is_not_empty"
    }
    return parsed_json['data']
};

