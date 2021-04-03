var menu = document.getElementById('burger');
var log = document.getElementById('log');
var nav = document.getElementById('top-nav');
function dropDown(){

    if (nav.style.display == "block"){
        nav.style.display = "none";
        log.style.display = "none";
    }else{
        nav.style.display = "block";
        log.style.display = "block";
    }
}

function navResize(){
    if(screen.width > 768){

        if (nav.style.display !== "flex" ){
            nav.style.display = "flex";
            log.style.display = "block";
        }
    }else{
        if(nav.style.display == 'flex'){
            nav.style.display = 'none';
            log.style.display = 'none';
        }

    }
}


var l_switch = document.getElementById("mode");

function light_switch(){
   
       document.body.style.background = "#000"

}