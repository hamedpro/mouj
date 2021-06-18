var hamed = {}
hamed.tester = {
    failed: function (m) {
        console.log("[failed]: " + m);
    },
    passed: function (m) {
        console.log("[passed]: " + m);
    }
}
hamed.compareSimpleObjects = function(obj1,obj2){
    //todo : not tested completely
    for(i in obj1){
        if(obj1[i] != obj2[i]){
            return false
        }
    }
    for(i in obj2){
        if(obj1[i] != obj2[i]){
            return false
        }
    }
    return true
}
