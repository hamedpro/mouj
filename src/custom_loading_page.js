// use its functions to render custom loading page in dom directly !
//import its css file before using
function init_custom_loading_page(){
    var wrapper = document.createElement('div')
    var child = document.createElement('div');
    child.classList.add('child')
    wrapper.appendChild(child)
    wrapper.classList.add("custom_loading_page")
    document.getElementsByTagName('body')[0].appendChild(wrapper)
}
function toggle_custom_loading_page(){
    var wrapper = document.getElementsByClassName('custom_loading_page')[0]
    wrapper.classList.toggle('visible')
}
