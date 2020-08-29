"use strict";

let revisarLectulandia = (autor, titulo) => {
    //creando el a
    var temp1 = document.createElement('a');

    //agregandole el search query de lectulandia
    temp1.href = `https://www.lectulandia.co/search/${titulo}+${autor}`;
    temp1.target = "_blank";

    //agregandole un button
    temp1.innerHTML = '<button type="button" class="m-2 btn btn-lg btn-outline-primary">Lectulandia</button>';
    
    //returnea el a
    return temp1;
    
}

let revisarBajaEbooks = (autor, titulo) =>{
        //creando el a
        var temp1 = document.createElement('a');

        //agregandole el search query de lectulandia
        temp1.href = `https://bajaebooksgratis.com/books/search/${titulo}%20${autor}/`;
        temp1.target = "_blank";
    
        //agregandole un button
        temp1.innerHTML = '<button type="button" class="m-2 btn btn-lg btn-outline-primary">Bajaebooksgratis</button>';
        
        //returnea el a
        return temp1;
}

//la funcion map tiene 3 variables incorporadas, la 1- val o valor de la posicion donde se encuentra, 2- i que es el numero del indice donde se encuentra en esa iteracion y 3- arr que es el array completo
let revisandoInputs = (txtArray) => {
    //definimos un int para contar los errores
    let errores = 0; 
    
    //instanciamos los dos input
    let txtAutor = document.getElementById("txtAutor");
    let txtTitulo = document.getElementById("txtTitulo");

    //cada vez que se ejecute la funcion, lo primero es quitar clases de invalidez
    txtTitulo.classList.remove("is-invalid");
    txtAutor.classList.remove("is-invalid");

    //loopeamos sobre el array y si el largo (length: propiedad de JS prebuilt) del valor de la iteracion es 0 entonces tenemos un error o sea, sumamos un digito a nuestra variable errores, sino, errores queda igual
    txtArray.map((val, i)=> {
    //dependiendo del valor del indice le agregamos una clase de bootstrap llamada is-invalid puesto que ese indice viene vacio, 0 el autor 1 el titulo
        if ( val.length == 0 ){
            errores++;
            i == 0 ? txtAutor.classList.add("is-invalid") : txtTitulo.classList.add("is-invalid");
        } else{
            errores = errores;
        }
    });

    //funcion de libreria SweetAlert
    errores == 2 && swal("Error!", "Las dos entradas de texto tiene que estar llenas!", "error");
    
    //si errores equivale a 0 quiere decir que los dos strings contienen algo de otro modo errores siempre va a ser mayor que 1
    return errores == 0;
}

//self-explanatory
let limpiandoInputs = () => {
    let txtAutor = document.getElementById("txtAutor");
    let txtTitulo = document.getElementById("txtTitulo");
    txtAutor.value = "";
    txtTitulo.value = "";
}

//revisando si existe una busqueda recurrente o no
let existeDivBusqueda = () => {
    let divBusqueda = document.getElementById("busqueda");

    if (divBusqueda !== null){
        divBusqueda.remove();
    }
}


//window -> DOCContentLoaded -> "main"
window.addEventListener('DOMContentLoaded', () => {
    const btnBuscar = document.getElementById("btnBuscar");
    btnBuscar.addEventListener("click", (e)=>{
        //e es el objeto Event, por lo general los botones cuando se les hace click "re-frescan la pagina" entonces con el .preventDefault evitamos ese comportamiento
        e.preventDefault();

        //recogiendo el valor de los inputs para validar y crear los search query
        let txtAutor = document.getElementById("txtAutor").value;
        let txtTitulo = document.getElementById("txtTitulo").value;

        existeDivBusqueda();

        //validacion de que los valores dentro de los inputs no sean nulos
        if (revisandoInputs([txtAutor, txtTitulo])){
            //crea el div del jumbotron
            let jumbotemp = document.createElement('div');
            let container = document.getElementById('contenedor');

            //agregandole la clase al jumbotron
            jumbotemp.classList.add('jumbotron');

            //agregando Id para multiples propositos
            jumbotemp.id = "busqueda";

            //ejecuta las funciones que returnean los a y le hace append al jumbotron
            jumbotemp.append(revisarLectulandia(txtAutor, txtTitulo));
            jumbotemp.append(revisarBajaEbooks(txtAutor, txtTitulo));

            //limpiar inputs
            limpiandoInputs();
            
            //success notification con SweetAlert
            swal("Listo!", "Abajo podrás encontrar botones de cada uno de nuestros buscadores, los cuales te van a redirigir a sus resultados!", "success");

            //le hace append al contenedor de nuestro nuevo jumbotron
            container.append(jumbotemp);
        }
    });
});