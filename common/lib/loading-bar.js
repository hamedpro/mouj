function set_loading_bar(percent){
    return new Promise((res,rej)=>{
        let loading_bar_el ;
        if(document.getElementById("loading-bar")!=null){
            loading_bar_el = document.getElementById("loading-bar")
        }else{
            loading_bar_el = document.createElement("div");
            loading_bar_el.id  = "loading-bar"
            $(loading_bar_el).addClass("loading-bar");
            $("body").append(loading_bar_el)
        };
        $(loading_bar_el).animate({
            width:percent+"%"
        },res)
    })
}
function remove_loading_bar(){
    setTimeout(()=>{ // timeout is just for ux reasons
        if(document.getElementById("loading-bar")!= null){
            $(document.getElementById("loading-bar")).remove();
        }
    },500)
}