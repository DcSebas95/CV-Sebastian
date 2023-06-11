let menuVisible = false;
//FUNCION MOSTAR U OCULTAR MENÚ//
function mostrar0cultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }

}
function seleccionar(){
    //OCULTAR MENU DESPUES DE SELECCIONAR OPCION
    document.getElementById("nav").classList="";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills= document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("hmtlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("trabajo");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("django");
        habilidades[6].classList.add("git");
        habilidades[7].classList.add("pasion");
    }
}

//FUNCION PARA SKILLS
Window.onscroll = function(){
    efectoHabilidades();
}

