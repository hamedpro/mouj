class preloader{
  start(){
    document.write("<div id='preload_el'></div>")
  }
  finish(){
    document.getElementById('preload_el').style.opacity = 0
    setTimeout(()=>{
        document.getElementById('preload_el').remove()
    },600)
  }
}