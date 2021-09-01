var connector = require('./front-end-connector')
function test(){
    if(connector.fetch_pro({
        url:'google.com',
        data:{prop1:'hamed',prop2:"negin"}
    }) == "google.com?prop1=hamed&prop2=negin"){console.log('test passed')}
}
test()