document.querySelectorAll("path").forEach(e=>{
    e.addEventListener("mouseover", function(){
        window.onmousemove = function(mouse){
            let x = mouse.clientX;
            let y = mouse.clientY;
            document.getElementById('namep').style.top = y+20+"px";
            document.getElementById('namep').style.left = x+20+"px";
        }
        try{
            document.getElementById('namep').innerText = e.attributes.name.value;
        }catch(error){
            if(e.id === ""){
                document.getElementById('namep').innerText = e.classList;
            }
            else{
                document.getElementById('namep').innerText = e.id;
            }
        }
    })
    e.addEventListener("mouseleave", function(){
        document.getElementById('namep').innerText = ""
    })
})