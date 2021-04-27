//c1
const click = document.getElementById("click");
const box1 = document.getElementById("box1");

click.onclick = function(){
    if(box1.style.display === "none"){
        box1.style.display = "block";
    }
    else{
        box1.style.display = "none";
    }
}

//c2
const click2 = document.getElementById("click2");
const box2 = document.getElementById("box2");

click2.onclick = function(){
    const rodomColor = Math.floor(Math.random() * 123456).toString(16);
    box2.style.backgroundColor = "#" + rodomColor;
}



//c3
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const click3 = document.getElementById("click3");

click3.onclick = function (){
    const tam = box3.innerText;
    box3.innerText = box4.innerText;
    box4.innerText = tam;
}

//c4
const click4 = document.getElementById("click4");
const box5 = document.getElementById("box5");
let hi = 14;

click4.onclick = function (){
    hi += 1;
    box5.style.fontSize = hi + "px";
}











