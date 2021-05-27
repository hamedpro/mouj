var states = [
    false,
    false,
    false,
    false,
    false
]
function applyStates (){
    var activeColor = "blue";
    var deactiveColor = "lightblue";
    for(i=0;i<5;i++){
        if(states[i]){
            document.getElementById('box'+(i+1)).style.backgroundColor = activeColor
        }else{
            document.getElementById('box'+(i+1)).style.backgroundColor = deactiveColor
        }
        
    }
}
window.onload = function(){
    document.getElementById('box1').onclick=function(){
        states[0] = true 
        states[1] = states[2] = states[3] = states[4] = false
        applyStates()
    }
    document.getElementById('box2').onclick=function(){
        states[0] = states[1] = true 
        states[2] = states[3] = states[4] = false
        applyStates()
    }
    document.getElementById('box3').onclick=function(){
        states[0] = states[1] = states[2] = true
        states[3] = states[4] = false
        applyStates()
    }
    document.getElementById('box4').onclick=function(){
        states[0] = states[1] = states[2] = states[3] = true
        states[4] = false
        applyStates()
    }
    document.getElementById('box5').onclick=function(){
        states[0] = states[1] = states[2] = states[3] = states[4]= true
        applyStates()
    }
    
}
