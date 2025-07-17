const icon= document.getElementById("icon");

icon.onclick= function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src= "./assessment/moon.png"
    }
    else{
        icon.src= "./assessment/sun.png"
    }
}