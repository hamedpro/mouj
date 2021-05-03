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