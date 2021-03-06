export async function custom_ajax({params={}}){
    var url = "http://localhost:80/mouj-backend/requests.php";
    // note : in reject func of first then block you should use e.message for error handling
    //todo change url above and use "check server connection script" to detect dev or prod env
    //todo tell user about set dev and prod urls before build or start parcel
    if(Object.keys(params).length !== 0){
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
    console.log('fetch request detected to: '+url)
    var parsed_json = null;
    try{
        parsed_json = await fetch_response.then(res=>res.json())
    }catch(e){
        throw new Error('invalid_json')
    }
    
    //check if error field in json is not empty
    if(parsed_json.errors.length !== 0){
        throw new Error("errors_field_is_not_empty")
    }
    return parsed_json['data']
};