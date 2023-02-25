feliz=0;
page=[];
function setup() {
    cuadro=createCanvas(500,400);
    cuadro.position(470,169);
    vidio.hide();
}
function preload() {
    vidio=createVideo("Video proyecto.mp4");
}
function draw() {
    image(vidio,0,0,500,400);
    if (feliz==1) {
        model.detect(vidio,mama);
        for (let index = 0; index < page.length; index++) {
            fill("blue");
            stroke("grey");
            textSize(18);
            text(page[index].label,page[index].x+10,page[index].y+25);
            noFill();
            stroke("burlywood");
            strokeWeight(10);
            rect(page[index].x,page[index].y,page[index].width,page[index].height);
        }
        }
}
function empieza() {
    model=ml5.objectDetector("cocossd",come);
}
function come() { 
    document.getElementById("LISTO").innerHTML="DETECTANDO LOS OBJETOS DE ESTE VIDEO";
    console.log("listo calispto :)");
    vidio.loop();
    vidio.speed(1);
    vidio.volume(1);
    feliz=1;
}
function pausa(params) {
    document.getElementById("LISTO").innerHTML="SE A DETENIDO EL VIDEO. ESPERANDO...";
    vidio.pause();
    vidio.speed(0);
    vidio.volume(0);
}
function mama(errores,responde) {
    if (errores) {
     console.errores(errores);
    } 
    else{
     console.log(responde);
     page=responde;
    }
 }