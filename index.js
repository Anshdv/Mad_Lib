let submitbutton = document.querySelector(".button");
submitbutton.addEventListener("click", buttonclicked);


function buttonclicked(){
    document.querySelector(".word1").textContent = document.querySelector(".word1input").value;
    document.querySelector(".word2").textContent = document.querySelector(".word2input").value;
    document.querySelector(".word3").textContent = document.querySelector(".word3input").value;
    document.querySelector(".word4").textContent = document.querySelector(".word4input").value;
    document.querySelector(".word5").textContent = document.querySelector(".word5input").value;
    document.querySelector(".word6").textContent = document.querySelector(".word6input").value;
    document.querySelector(".word7").textContent = document.querySelector(".word7input").value;
    document.querySelector(".word8").textContent = document.querySelector(".word8input").value;
    document.querySelector(".word9").textContent = document.querySelector(".word9input").value;
    document.querySelector(".word10").textContent = document.querySelector(".word10input").value;
    document.querySelector(".word11").textContent = document.querySelector(".word11input").value;
    document.querySelector(".word12").textContent = document.querySelector(".word12input").value;

    document.querySelector(".story"). style.display = "block"
}

