function circulo(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("circulo")
    
}
function rombo(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("rombo")
}
function rectanguloH(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("rectanguloH")
}
function rectanguloV(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("rectanguloV")
}
function arriba(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("arriba")
}
function abajo(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("abajo")
}
function izquierda(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("izquierda")
}
function derecha(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("derecha")
}
function diagonal(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("diagonal")
}
function triangulo(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("triangulo")
}
function imagen(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("imagen")
}
function huevo(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("huevo")
}
function pacman(){
    var figura = document.getElementById("figura");
    figura.classList =""
    figura.classList.toggle("pacman")
}

//CAPTURAR DATOS DE AVATAR
//capturamos los datos de cada campo del formulario
function capturarDatos(){
    var nombres =document.getElementById("nombres").value;
    var edad =document.getElementById("edad").value;
    var fecha =document.getElementById("fecha").value
    var genero =document.getElementById("genero").value;
    var email =document.getElementById("email").value;
    var descripcion =document.getElementById("descripcion").value;
    var color =document.getElementById("color").value;

    //capturamos los elementos a los cuales asignamos los valores
    var mNombres =document.getElementById("mNombre");
    var mEdad =document.getElementById("mEdad");
    var mFecha =document.getElementById("mFecha");
    var mGenero =document.getElementById("mGenero");
    var mEmail =document.getElementById("mEmail");
    var mDescripcion =document.getElementById("mDescripcion");

    var contAvatar = document.getElementById("contAvatar");

    mNombres.textContent = nombres;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;
    mDescripcion.textContent = descripcion;
    
    if(genero == "Masculino"){
        mFoto.src="img/hombre.png";
    }else if (genero == "Femenino"){
        mFoto.src="img/mujer.png";
    }else{
        mFoto.src="img/otro.png"
    }
   //HACER SWITCH COLOR (CAMBIAR LOS COLORES)
    switch (color) {
        case "Azul":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("azul");
            break;
        case "Rojo":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("rojo");
            break;
        case "Verde":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("verde");
            break;
        case "Rosado":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("rosado");
            break;
        case "Morado":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("morado");
        
    }
    

}