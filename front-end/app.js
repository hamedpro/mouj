function fade_out_left(element){
    $(element).removeClass('fade_in_right')
    $(element).addClass('fade_out_left');
}
function fade_in_right(element){
    $(element).removeClass('fade_out_left')
    $(element).addClass('fade_in_right')
}
function change_content_with_animation(element,new_content){
    setTimeout(()=>{
        fade_out_left(element);
    },0)
    setTimeout(()=>{
        element.html(new_content);
    },1000)
    setTimeout(()=>{
        fade_in_right(element);
    },1050)
}
function change_main_background_color(new_color){
    $('.background').css({'background-color':new_color})
}
function update_header_navbar(){
    let path = window.location.href.split('#');
    let last_child = path[path.length-1] == "/" ? "" : path[path.length-1];
    let new_header_title;
    if(last_child == "") {
        new_header_title = `<a href='#/' class="text-light">vahed</a><span> ${last_child}</span>`;
    }else{
        new_header_title = `<a href='#/'>vahed</a><span> ${last_child}</span>`;
    }
    
    change_content_with_animation($(".header .url"),new_header_title);
}
let app = new Vue({
    el:"#app",
    router,
    store,
    watch:{
        $route(to,from){
            update_header_navbar()

        }
    },
    created:function(){
        $(document).ready(()=>{ //make sure about it
            update_header_navbar()
        })
    }
})

//animate loading bar on link clicks => 
$(document).on('click','a',function(){
    set_loading_bar(100).then(function(){remove_loading_bar()})
})


