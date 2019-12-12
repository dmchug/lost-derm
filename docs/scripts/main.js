var splash = document.getElementById("splash");

splash.addEventListener("click", function(){

// make it so that the splash page disappears when you click on it.
splash.style.animationName = "fadeout";
console.log("ok");
setTimeout(function(){ splash.style.display="none"; }, 3000);


});
