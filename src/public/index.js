let aux = 0;
const arrTriste = ["imgs/triste1.webp", "imgs/triste2.webp", "imgs/triste3.png"];
const arrX = ["40px", "-40px", "40px"];
const arrY = ["150px", "-100px", "100px"];
const si = document.getElementById("si");
const no = document.getElementById("no");
const img = document.getElementById("timidoImg");
const divMensaje = document.getElementById("mensaje");
si.addEventListener("click", async(e)=>{
    img.src = "imgs/oso.gif";
    await fetch('/si');
    setTimeout(() => {
        divMensaje.style.visibility = "visible";
        divMensaje.innerHTML = `<p>
        Ahora tu enamorado es un tal José Lizardo jajajaja :) <br> FELII
    </p>`;
    }, 1000);
    setTimeout(() => {
        divMensaje.style.visibility = "hidden";
    }, 5000);
});
no.addEventListener(("click"), async()=>{
    await fetch('/no');
    if(aux<=2){
        img.src = arrTriste[aux];
        no.style.transform = `translate(${arrX[aux]}, ${arrY[aux]})`
        aux++;
    }else{
        divMensaje.style.visibility = "visible";
        divMensaje.innerHTML = "<p>Fue pe :v</p>";  
        setTimeout(() => {
            divMensaje.style.visibility = "hidden";
        }, 5000);
    } 
});